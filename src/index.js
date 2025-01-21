import VConsole from 'vconsole';

// Initialize vConsole with specific targeting
const vConsole = new VConsole({
    theme: 'dark',
    defaultPlugins: ['system', 'network', 'element', 'storage'],
    disableLogScrolling: true,
    target: document.querySelector('#vconsole-container'),
    maxLogNumber: 1000,
});

// Ensure vConsole is shown and properly positioned
document.addEventListener('DOMContentLoaded', () => {
    vConsole.show();

    // Override any modal behaviors
    const vcPanel = document.querySelector('#__vconsole');
    if (vcPanel) {
        vcPanel.style.position = 'absolute';
        vcPanel.style.maxHeight = '100%';
    }
});

// Test basic console methods
window.testBasicLogs = () => {
    console.log('Basic log message');
    console.info('Info message');
    console.debug('Debug message');
    console.warn('Warning message');
    console.error('Error message');

    // Test console.time
    console.time('Timer test');
    setTimeout(() => {
        console.timeEnd('Timer test');
    }, 1000);
};

// Test styled logs
window.testStyledLogs = () => {
    console.log('%c Styled text ', 'background: #4CAF50; color: white; padding: 2px 4px; border-radius: 2px;');
    console.log('%c Blue text %c Red text', 'color: blue', 'color: red');

    // Test string substitutions
    console.log('Hello %s!', 'world');
    console.log('Number: %d', 42);
    console.log('Object: %o', { foo: 'bar' });
};

// Test network requests
window.testNetworkRequest = () => {
    // Regular XHR request
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => console.log('Fetch response:', data));

    // XHR request with _noVConsole flag
    const xhr = new XMLHttpRequest();
    xhr._noVConsole = true;
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/2');
    xhr.send();
};

// Test system logs
window.testSystemLogs = () => {
    console.log('[system]', 'System log message');
    vConsole.network.add({
        method: 'POST',
        url: 'https://example.com/api',
        data: { foo: 'bar' },
        response: '{"success": true}'
    });
};