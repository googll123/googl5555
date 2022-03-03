var options = {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [{ text: 'javascript', callback_data: '/javascript' }],
        [{ text: 'react_js', callback_data: '/react_js' }],
        [{ text: 'react_native', callback_data: '/react_native' }],
        [{ text: 'windows_11', callback_data: '/windows_11' }],
        [{ text: 'windows_10', callback_data: '/windows_10' }],
      ]
    })
};

module.exports = {options};