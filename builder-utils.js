(function(global){
  function toTrimmedId(value){
    return typeof value === 'string' ? value.trim() : '';
  }

  function addMissingTarget(missingTargets, target, key){
    const info = missingTargets.get(target) || { menuItems: 0, commands: 0 };
    info[key] += 1;
    missingTargets.set(target, info);
  }

  function findInvalidScreenReferences(screens, commands){
    const screenIds = new Set();
    (Array.isArray(screens) ? screens : []).forEach(scr => {
      if(!scr) return;
      const id = toTrimmedId(scr.id);
      if(id) screenIds.add(id);
    });

    const invalidMenuItemIds = new Set();
    const invalidCommandIds = new Set();
    const missingTargets = new Map();

    (Array.isArray(screens) ? screens : []).forEach(scr => {
      if(!scr || !Array.isArray(scr.items)) return;
      scr.items.forEach(item => {
        if(!item) return;
        const target = toTrimmedId(item.screen);
        if(target && !screenIds.has(target)){
          invalidMenuItemIds.add(Object.prototype.hasOwnProperty.call(item,'uid') ? item.uid : item);
          addMissingTarget(missingTargets, target, 'menuItems');
        }
      });
    });

    (Array.isArray(commands) ? commands : []).forEach(cmd => {
      if(!cmd) return;
      const target = toTrimmedId(cmd.screen);
      if(target && !screenIds.has(target)){
        invalidCommandIds.add(Object.prototype.hasOwnProperty.call(cmd,'uid') ? cmd.uid : cmd);
        addMissingTarget(missingTargets, target, 'commands');
      }
    });

    return {
      screenIds,
      invalidMenuItemIds,
      invalidCommandIds,
      missingTargets
    };
  }

  if(typeof module !== 'undefined' && module.exports){
    module.exports = { findInvalidScreenReferences };
  }

  global.findInvalidScreenReferences = findInvalidScreenReferences;
})(typeof globalThis !== 'undefined' ? globalThis : this);
