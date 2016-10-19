if (typeof window !== 'undefined') {
  window.Module = {
    cwrap: function () { return arguments[0] === 'version' ? version : compile; },
    writeStringToMemory: function () {},
    setValue: function () {},
    Pointer_stringify: function () {},
    Runtime: {
      addFunction: function () {},
      removeFunction: function () {}
    },
    _compileJSONMulti: {},
    _compileJSONCallback: {},
    _compileJSON: {}
  };
}

function compile (source, optimization, missingInputs) {
  if (typeof source === 'string') {
    source = JSON.parse(source);
  }
  var key = optimization.toString();
  for (var k in source.sources) {
    key += k + source.sources[k];
  }
  var data = mockData[key.trim()]; // eslint-disable-line
  if (data === undefined) {
    return JSON.stringify({
      errors: ['mock compiler: source not found']
    });
  } else {
    data.missingInputs.map(function (item, i) {
      if (missingInputs) {
        missingInputs(item);
      }
    });
  }
  return JSON.stringify(data.result);
}

function version () {
  return 'mock compiler';
}


var mockData = {"1Untitledcontract test {}":{"key":"1Untitledcontract test {}","source":{"sources":{"Untitled":"contract test {}"}},"optimization":1,"missingInputs":[],"result":{"contracts":{"test":{"assembly":{".code":[{"begin":0,"end":16,"name":"PUSH","value":"60"},{"begin":0,"end":16,"name":"PUSH","value":"40"},{"begin":0,"end":16,"name":"MSTORE"},{"begin":0,"end":16,"name":"PUSH #[$]","value":"0000000000000000000000000000000000000000000000000000000000000000"},{"begin":0,"end":16,"name":"DUP1"},{"begin":0,"end":16,"name":"PUSH [$]","value":"0000000000000000000000000000000000000000000000000000000000000000"},{"begin":0,"end":16,"name":"PUSH","value":"0"},{"begin":0,"end":16,"name":"CODECOPY"},{"begin":0,"end":16,"name":"PUSH","value":"0"},{"begin":0,"end":16,"name":"RETURN"}],".data":{"0":{".code":[{"begin":0,"end":16,"name":"PUSH","value":"60"},{"begin":0,"end":16,"name":"PUSH","value":"40"},{"begin":0,"end":16,"name":"MSTORE"},{"begin":0,"end":16,"name":"PUSH [ErrorTag]"},{"begin":0,"end":16,"name":"JUMP"}]}}},"bytecode":"606060405260088060106000396000f36060604052600256","functionHashes":{},"gasEstimates":{"creation":[39,1600],"external":{},"internal":{}},"interface":"[]\n","opcodes":"PUSH1 0x60 PUSH1 0x40 MSTORE PUSH1 0x8 DUP1 PUSH1 0x10 PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN PUSH1 0x60 PUSH1 0x40 MSTORE PUSH1 0x2 JUMP ","runtimeBytecode":"6060604052600256","srcmap":"0:16:0:-;;;;;;;;;","srcmapRuntime":"0:16:0:-;;;;"}},"errors":["Untitled:1:1: Warning: Source file does not specify required compiler version! Consider adding \"pragma solidity ^0.4.2;\".\ncontract test {}\n^--------------^\n"],"formal":{"why3":"\n\nmodule UInt256\n\tuse import mach.int.Unsigned\n\ttype uint256\n\tconstant max_uint256: int = 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\n\tclone export mach.int.Unsigned with\n\t\ttype t = uint256,\n\t\tconstant max = max_uint256\nend\n\nmodule Address\n\tuse import mach.int.Unsigned\n\ttype address\n\tconstant max_address: int = 0xffffffffffffffffffffffffffffffffffffffff (* 160 bit = 40 f's *)\n\tclone export mach.int.Unsigned with\n\t\ttype t = address,\n\t\tconstant max = max_address\nend\n   \nmodule Contract_test\n\tuse import int.Int\n\tuse import ref.Ref\n\tuse import map.Map\n\tuse import array.Array\n\tuse import int.ComputerDivision\n\tuse import mach.int.Unsigned\n\tuse import UInt256\n\texception Revert\n\texception Return\n\ttype state = ()\n\ttype account = {\n\t\tmutable balance: uint256;\n\t\tstorage: state\n\t}\n\tval external_call (this: account): bool\n\t\tensures { result = false -> this = (old this) }\n\t\twrites { this }\nend\n\n"},"sourceList":["Untitled"],"sources":{"Untitled":{"AST":{"children":[{"attributes":{"fullyImplemented":true,"isLibrary":false,"linearizedBaseContracts":[5600188],"name":"test"},"children":[],"id":5600188,"name":"ContractDefinition","src":"0:16:0"}],"name":"SourceUnit"}}}}},"0Untitledcontract test {}":{"key":"0Untitledcontract test {}","source":{"sources":{"Untitled":"contract test {}"}},"optimization":0,"missingInputs":[],"result":{"contracts":{"test":{"assembly":{".code":[{"begin":0,"end":16,"name":"PUSH","value":"60"},{"begin":0,"end":16,"name":"PUSH","value":"40"},{"begin":0,"end":16,"name":"MSTORE"},{"begin":0,"end":16,"name":"PUSH #[$]","value":"0000000000000000000000000000000000000000000000000000000000000000"},{"begin":0,"end":16,"name":"DUP1"},{"begin":0,"end":16,"name":"PUSH [$]","value":"0000000000000000000000000000000000000000000000000000000000000000"},{"begin":0,"end":16,"name":"PUSH","value":"0"},{"begin":0,"end":16,"name":"CODECOPY"},{"begin":0,"end":16,"name":"PUSH","value":"0"},{"begin":0,"end":16,"name":"RETURN"}],".data":{"0":{".code":[{"begin":0,"end":16,"name":"PUSH","value":"60"},{"begin":0,"end":16,"name":"PUSH","value":"40"},{"begin":0,"end":16,"name":"MSTORE"},{"begin":0,"end":16,"name":"PUSH [tag]","value":"1"},{"begin":0,"end":16,"name":"JUMP"},{"begin":0,"end":16,"name":"tag","value":"1"},{"begin":0,"end":16,"name":"JUMPDEST"},{"begin":0,"end":16,"name":"PUSH [ErrorTag]"},{"begin":0,"end":16,"name":"JUMP"}]}}},"bytecode":"6060604052600c8060106000396000f360606040526008565b600256","functionHashes":{},"gasEstimates":{"creation":[39,2400],"external":{},"internal":{}},"interface":"[]\n","opcodes":"PUSH1 0x60 PUSH1 0x40 MSTORE PUSH1 0xC DUP1 PUSH1 0x10 PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN PUSH1 0x60 PUSH1 0x40 MSTORE PUSH1 0x8 JUMP JUMPDEST PUSH1 0x2 JUMP ","runtimeBytecode":"60606040526008565b600256","srcmap":"0:16:0:-;;;;;;;;;","srcmapRuntime":"0:16:0:-;;;;;;;"}},"errors":["Untitled:1:1: Warning: Source file does not specify required compiler version! Consider adding \"pragma solidity ^0.4.2;\".\ncontract test {}\n^--------------^\n"],"formal":{"why3":"\n\nmodule UInt256\n\tuse import mach.int.Unsigned\n\ttype uint256\n\tconstant max_uint256: int = 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\n\tclone export mach.int.Unsigned with\n\t\ttype t = uint256,\n\t\tconstant max = max_uint256\nend\n\nmodule Address\n\tuse import mach.int.Unsigned\n\ttype address\n\tconstant max_address: int = 0xffffffffffffffffffffffffffffffffffffffff (* 160 bit = 40 f's *)\n\tclone export mach.int.Unsigned with\n\t\ttype t = address,\n\t\tconstant max = max_address\nend\n   \nmodule Contract_test\n\tuse import int.Int\n\tuse import ref.Ref\n\tuse import map.Map\n\tuse import array.Array\n\tuse import int.ComputerDivision\n\tuse import mach.int.Unsigned\n\tuse import UInt256\n\texception Revert\n\texception Return\n\ttype state = ()\n\ttype account = {\n\t\tmutable balance: uint256;\n\t\tstorage: state\n\t}\n\tval external_call (this: account): bool\n\t\tensures { result = false -> this = (old this) }\n\t\twrites { this }\nend\n\n"},"sourceList":["Untitled"],"sources":{"Untitled":{"AST":{"children":[{"attributes":{"fullyImplemented":true,"isLibrary":false,"linearizedBaseContracts":[5579100],"name":"test"},"children":[],"id":5579100,"name":"ContractDefinition","src":"0:16:0"}],"name":"SourceUnit"}}}}}};
