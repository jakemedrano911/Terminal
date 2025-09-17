const test = require('node:test');
const assert = require('node:assert/strict');

const { findInvalidScreenReferences } = require('../builder-utils.js');

test('reports no issues when all screen references are valid', () => {
  const screens = [
    { id: 'menu', items: [
      { screen: '', uid: 'menu-blank' },
      { screen: 'status', uid: 'menu-status' }
    ] },
    { id: 'status', items: [] }
  ];
  const commands = [
    { screen: '', uid: 'cmd-empty' },
    { screen: 'menu', uid: 'cmd-menu' }
  ];

  const result = findInvalidScreenReferences(screens, commands);

  assert.equal(result.invalidMenuItemIds.size, 0);
  assert.equal(result.invalidCommandIds.size, 0);
  assert.equal(result.missingTargets.size, 0);
});

test('identifies unknown screens referenced by menu items', () => {
  const screens = [
    { id: 'menu', items: [
      { screen: 'missing', uid: 'menu-missing' },
      { screen: '  other  ', uid: 'menu-other' }
    ] }
  ];
  const commands = [];

  const result = findInvalidScreenReferences(screens, commands);

  assert.ok(result.invalidMenuItemIds.has('menu-missing'));
  assert.ok(result.invalidMenuItemIds.has('menu-other'));
  assert.equal(result.invalidCommandIds.size, 0);
  assert.equal(result.missingTargets.size, 2);
  const missingInfo = result.missingTargets.get('missing');
  assert.deepEqual(missingInfo, { menuItems: 1, commands: 0 });
  const trimmedInfo = result.missingTargets.get('other');
  assert.deepEqual(trimmedInfo, { menuItems: 1, commands: 0 });
});

test('aggregates menu and command usage counts for unknown screens', () => {
  const screens = [
    { id: 'menu', items: [ { screen: 'lost', uid: 'item-1' } ] }
  ];
  const commands = [
    { screen: 'lost', uid: 'cmd-1' },
    { screen: 'still-missing', uid: 'cmd-2' }
  ];

  const result = findInvalidScreenReferences(screens, commands);

  assert.ok(result.invalidMenuItemIds.has('item-1'));
  assert.ok(result.invalidCommandIds.has('cmd-1'));
  assert.ok(result.invalidCommandIds.has('cmd-2'));
  assert.equal(result.missingTargets.size, 2);
  const lostInfo = result.missingTargets.get('lost');
  assert.deepEqual(lostInfo, { menuItems: 1, commands: 1 });
  const stillMissingInfo = result.missingTargets.get('still-missing');
  assert.deepEqual(stillMissingInfo, { menuItems: 0, commands: 1 });
});
