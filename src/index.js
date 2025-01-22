import VConsole from 'vconsole';

// Initialize vConsole
const vConsole = new VConsole({
    theme: 'dark' // Try different themes
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
    // Regular fetch request
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => console.log('Fetch response:', data));

    // Alternative approach using fetch instead of XHR
    fetch('https://jsonplaceholder.typicode.com/todos/2', {
        headers: {
            'X-No-VConsole': 'true'  // Custom header to indicate we want to skip vConsole logging
        }
    }).then(response => response.json())
        .then(data => console.log('Second fetch response:', data));
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