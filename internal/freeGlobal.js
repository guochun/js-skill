const freeGlobal = typeof global == 'object' && global !== null && global.Object === Object && global

export default freeGlobal