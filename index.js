let go = 0;
const TelegramApi = require('node-telegram-bot-api');
const { Script } = require('vm');
const token ='5005345012:AAFACSeU_F0A1xOeF-6qLwM3uZ4s4sKhih8';
const bot =new TelegramApi(token,{polling: true})
const options = require('./googl').options;

bot.setMyCommands([
    {command: '/start',description: 'старт'},
    {command: '/info',description: 'информацыя'},
    {command: '/googl',description: 'googl'},
]);

bot.on("message",async msg=>{
    let img = 0;
    
    const r = msg
    let u = ''
    for(let y = 0;y<r.text.length;y++){u+=r.text[y].toLowerCase()};
    if(u==='привет'||u==='hellow'){
        await bot.sendSticker(r.from.id,'https://tlgrm.ru/_/stickers/b50/063/b5006369-8faa-44d7-9f02-1ca97d82cd49/1.webp');
        img = '';
    }
    if(u==='minecraft'){
        await bot.sendSticker(r.from.id,'https://tlgrm.ru/_/stickers/741/656/7416567c-bc94-36e7-8d4b-ecb706761efc/1.webp');
        img = '';
    };
    if(u==='/start'){
        await bot.sendSticker(r.from.id,'https://tlgrm.ru/_/stickers/b50/063/b5006369-8faa-44d7-9f02-1ca97d82cd49/1.webp');     
        await bot.sendMessage(r.from.id,`привет ${r.from.first_name} вот что я умею`, options);
        img = '';
    };
    if(go===10){
        go = 0;
        img = ''
        await bot.sendMessage(r.from.id,'https://tlgrm.ru/_/stickers/808/bcc/808bccab-e48e-4be0-bfc2-b8940a0332d2/192/13.webp');
    }
    if(img === 0){
        go++
        await bot.sendSticker(r.from.id,'https://tlgrm.ru/_/stickers/b50/063/b5006369-8faa-44d7-9f02-1ca97d82cd49/2.webp');
        await bot.sendMessage(r.from.id,'Я не знаю');
    };
})
bot.on('callback_query',msg =>{
    if(msg.data==='/javascript'){
        bot.sendSticker(msg.from.id,'https://tlgrm.ru/_/stickers/808/bcc/808bccab-e48e-4be0-bfc2-b8940a0332d2/1.webp');
        bot.sendMessage(msg.from.id,'node.js https://nodejs.org/ru/download/');
        bot.sendMessage(msg.from.id,'visual studio code https://code.visualstudio.com/');
        bot.sendMessage(msg.from.id,'webstorm https://www.jetbrains.com/webstorm/');
    }
    if(msg.data==='/react_js'){
        bot.sendSticker(msg.from.id,'https://tlgrm.ru/_/stickers/808/bcc/808bccab-e48e-4be0-bfc2-b8940a0332d2/1.webp');
        bot.sendMessage(msg.from.id,'https://drive.google.com/drive/folders/1wEJ119AteBzohcSfc20QZaFiPHHbfqmP?usp=sharing');  
    }
    if(msg.data==='/react_native'){
        bot.sendSticker(msg.from.id,'https://tlgrm.ru/_/stickers/808/bcc/808bccab-e48e-4be0-bfc2-b8940a0332d2/1.webp');  
        bot.sendMessage(msg.from.id,'https://drive.google.com/drive/folders/1tR84zfEhUvB10QYnMKoqD-HzNGiKzS_m?usp=sharing');  
        
    }   
    if(msg.data==='/windows_11'){
        bot.sendSticker(msg.from.id,'https://tlgrm.ru/_/stickers/808/bcc/808bccab-e48e-4be0-bfc2-b8940a0332d2/1.webp'); 
        bot.sendSticker(msg.from.id,'https://th.bing.com/th/id/OIP.f70sQiu3jdap2JfVAxDo7gHaEK?w=314&h=180&c=7&r=0&o=5&pid=1.7.webp');
        bot.sendMessage(msg.from.id,'windows 11 https://www.microsoft.com/software-download/windows11');
    }
    if(msg.data==='/windows_10'){
        bot.sendSticker(msg.from.id,'https://tlgrm.ru/_/stickers/808/bcc/808bccab-e48e-4be0-bfc2-b8940a0332d2/1.webp');  
    }   

    suydrkitw8e9756t
});
