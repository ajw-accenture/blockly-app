import Blockly from 'blockly';
import { Xml } from 'blockly';
import { javascriptGenerator } from 'blockly/javascript';

const ws = Blockly.inject('#blockly-me', {
    media: './media',
    toolbox: document.getElementById('toolbox')
});

Xml.domToWorkspace(document.getElementById('blocklyInit'), ws);

const _onBlockUpdates = () => {
    const codeBlock = document.querySelector('#blockly-all #blockly-code #blockly-code-js code');
    const generatedCode = javascriptGenerator.workspaceToCode(ws);
    codeBlock.innerHTML = '';
    codeBlock.appendChild(document.createTextNode(generatedCode));
};

const _onExecuteCode = () => {
    window.LoopTrap = 1000;
    javascriptGenerator.INFINITE_LOOP_TRAP = 'if(--window.LoopTrap == 0) throw "Infinite loop.";\n';
    const code = javascriptGenerator.workspaceToCode(ws);

    try {
        eval(code);
    } catch (e) {
        alert(e);
    }
};

ws.addChangeListener(_onBlockUpdates);

document.getElementById('blockly-code-control-exec').addEventListener('click', _onExecuteCode);
