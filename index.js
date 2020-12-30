const Discord = require('discord.js');
const bot = new Discord.Client();




bot.on('ready', () =>{
	console.log('Yapa is ready');
})


bot.on('message', msg=>{
	if(msg.content.includes("Pog") ){
		msg.reply('<:emoji_name:790918933876178945>!');
	}
	if(msg.content.includes("pog") ){
		msg.reply('<:emoji_name:790918933876178945>!'); 
	}
	if(msg.content.includes("KKona") ){
		msg.reply('<:emoji_name:790918963340116048>')
	}
	if(msg.content.includes("kkona") ){
		msg.reply('<:emoji_name:790918963340116048>')
	}
	if(msg.content.includes("weird") ){
		msg.reply('<:emoji_name:790919044412473364>')
	}
	if(msg.content.includes("Weird") ){
		msg.reply('<:emoji_name:790919044412473364>')
	}
	if(msg.content.includes("sad") ){
		msg.reply('<:emoji_name:790918990381056030>')
		msg.react('<:peepoSad:790919071499157515>')
	}
	if(msg.content.includes("Sad") ){
		msg.reply('<:emoji_name:790918990381056030>')
		msg.react('<:peepoSad:790919071499157515>')
	}
	if(msg.content.includes("EZ") ){
		msg.reply('<:emoji_name:790918947452485672>')
	}
	if(msg.content.includes("ez") ){
		msg.reply('<:emoji_name:790918947452485672>')
	}
	if(msg.content.includes("Ez") ){
		msg.reply('<:emoji_name:790918947452485672>')
	}
	if(msg.content === ("POGGERS") ){
		msg.reply('<:emoji_name:790959262624251924>')
	}
	if(msg.content === ("poggers") ){
		msg.reply('<:emoji_name:790959262624251924>')
	}
	if(msg.content === ("Poggers") ){
		msg.reply('<:emoji_name:790959262624251924>')
	}
	if(msg.content.includes ("Pause") ){
		msg.reply('<:emoji_name:790919030629335080>')
	}
	if(msg.content.includes ("pause") ){
		msg.reply('<:emoji_name:790919030629335080>')
	}
	if(msg.content.includes ("happy") ){
		msg.reply('<:emoji_name:790919183743451166>')
	}
	if(msg.content.includes ("Happy") ){
		msg.reply('<:emoji_name:790919183743451166>')
	}
	if(msg.content.includes ("Laugh") ){
		msg.reply('<:emoji_name:790919170169634857>')
	}
	if(msg.content.includes ("laugh") ){
		msg.reply('<:emoji_name:790919170169634857>')
	}
	if(msg.content === ("pepega") ){
		msg.reply('<:emoji_name:790918976829128724>')
	}
	if(msg.content === ("Pepega") ){
		msg.reply('<:emoji_name:790918976829128724>')
	}
	if(msg.content === ("feelsstrongman") ){
		msg.reply('<:emoji_name:790958900882833428>')
	}
	if(msg.content === ("FeelsStrongMan") ){
		msg.reply('<:emoji_name:790958900882833428>')
	}
	if(msg.content === ("hypers") ){
		msg.reply('<:emoji_name:790959334300712982>')
	}
	if(msg.content === ("Hypers") ){
		msg.reply('<:emoji_name:790959334300712982>')
	}
	if(msg.content === ("HYPERS") ){
		msg.reply('<:emoji_name:790959334300712982>')
	}
	if(msg.content === ("5head") ){
		msg.reply('<:emoji_name:790919127132274739>')
	}
	if(msg.content === ("5Head") ){
		msg.reply('<:emoji_name:790919127132274739>')
	}
	if(msg.content === ("monkaW") ){
		msg.reply('<:emoji_name:790919003634925569>')
	}
	if(msg.content === ("monkaw") ){
		msg.reply('<:emoji_name:790919003634925569>')
	}
	if(msg.content.includes("OkayMan") ){
		msg.reply('<:emoji_name:790958819207413840>')
	}
	if(msg.content.includes("okayman") ){
		msg.reply('<:emoji_name:790958819207413840>')
	}
	if(msg.content.includes ("Hmm") ){
		msg.reply('<:emoji_name:790919197349773322>')
	}
	if(msg.content.includes ("hmm") ){
		msg.reply('<:emoji_name:790919197349773322>')
	}
	if(msg.content.includes ("Komrade") ){
		msg.reply('<:emoji_name:790919279570190338>')
	}
	if(msg.content.includes ("komrade") ){
		msg.reply('<:emoji_name:790919279570190338>')
	}
	if(msg.content === ("materwelon") ){
		msg.reply('https://youtu.be/jpON1tm1zmE')
	}
	if(msg.content === ("Materwelon") ){
		msg.reply('https://youtu.be/jpON1tm1zmE')
	}
	if(msg.author.id === '453322299144273931'){
		msg.react('🖕');
	}
	if(msg.author.id === '783932326366150668'){
		msg.react('<:pepeLaugh:790919170169634857>');
		msg.react('👉')
		msg.react('💩')
	}
	if(msg.author.id === '758400928591118378'){
		msg.react('<:pepeLaugh:790919170169634857>');
		msg.react('👉')
		msg.react('🇬');
		msg.react('🇦')
		msg.react('🇾')
	}
})



bot.login(process.env.token);