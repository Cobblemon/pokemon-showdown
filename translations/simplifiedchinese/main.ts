import type { Translations } from '../../server/chat';

export const translations: Translations = {
	name: "Simplified Chinese",
	strings: {
		"namelocked": "用户名封锁",
		"locked": "用户封锁",

		"autoconfirmed": "自动确认用户",
		"trusted": "信任用户",

		"Please follow the rules:": "遵守规则:",
		"[TN: Link to the PS rules for your language (path after pokemonshowdown.com]/rules": "/pages/rules-zh",
		"Global Rules": "全站规则",
		"${room} room rules": "${room}房间规则",

		"<strong>Global ranks</strong>": "<strong>全服权限</strong>",
		"+ <strong>Global Voice</strong> - They can use ! commands like !groups": "+ <strong>全服信任用户</strong> -可以使用!广播指令，比如!groups，并可以在限制发言期间发言",
		"% <strong>Global Driver</strong> - The above, and they can also lock users and check for alts": "% <strong>全服见习管理</strong> - 同信任用户，并可以锁定用户或查看他们的小号",
		"@ <strong>Global Moderator</strong> - The above, and they can globally ban users": "@ <strong>全服管理员</strong> - 同上，并可以将用户从服务器封禁",
		"* <strong>Global Bot</strong> - Like Moderator, but makes it clear that this user is a bot": "* <strong>全服机器人</strong> - 跟全服管理员一样，只不过是机器",
		"~ <strong>Global Administrator</strong> - They can do anything, like change what this message says and promote users globally": "~ <strong>全服总管</strong> - 可以在服务器做任何事，例如修改你现在看到的这条信息",

		"<strong>Room ranks</strong>": "<strong>房权限</strong>",
		"^ <strong>Prize Winner</strong> - They don't have any powers beyond a symbol.": "",
		"+ <strong>Voice</strong> - They can use ! commands like !groups": "+ <strong>信任用户</strong> - 可以使用!广播指令，比如!groups，并可以在限制发言期间发言",
		"% <strong>Driver</strong> - The above, and they can mute and warn": "% <strong>见习管理</strong> - 同上，并可以禁止用户发言或警告用",
		"@ <strong>Moderator</strong> - The above, and they can room ban users": "@ <strong>管理员</strong> - 同上，并可以将用户从房间封禁",
		"* <strong>Bot</strong> - Like Moderator, but makes it clear that this user is a bot": "* <strong>机器人</strong> - 跟管理员一样，只不过是机器",
		"# <strong>Room Owner</strong> - They are leaders of the room and can almost totally control it": "# <strong>房主</strong> - 房中的领导，几乎拥有房间的全部管理权力",

		"/help OR /h OR /? - Gives you help.": "/help 或 /h 或 /? - 寻求帮助",
		"For an overview of room commands, use /roomhelp": "想搜房里的指令，在房里打一下/roomhelp",
		"For details of a specific command, use something like: /help data": "若要查看具体指令的用法(如/data指令)，请以/help data的格式进行查询",

		"COMMANDS": "指令",
		"BATTLE ROOM COMMANDS": "对战指令",
		"OPTION COMMANDS": "设置指令",
		"INFORMATIONAL/RESOURCE COMMANDS": "信息/资料指令",
		"DATA COMMANDS": "数据指令",
		"DRIVER COMMANDS": "见习管理指令",
		"MODERATOR COMMANDS": "管理员指令",
		"ADMIN COMMANDS": "总管指令",

		"(replace / with ! to broadcast. Broadcasting requires: + % @ # ~)": "(把/换成!就可以广播指令。广播功能需要：+ % @ # ~)",

		"<strong>Room punishments</strong>:": "<strong>房间处罚</strong>:",
		"<strong>warn</strong> - Displays a popup with the rules.": "<strong>warn</strong> - 显示规则与警告",
		"<strong>mute</strong> - Mutes a user (makes them unable to talk) for 7 minutes.": "<strong>mute</strong> - 禁言用户（不能发言）七分钟。",
		"<strong>hourmute</strong> - Mutes a user for 60 minutes.": "<strong>hourmute</strong> - 禁言用户一个小时。",
		"<strong>ban</strong> - Bans a user (makes them unable to join the room) for 2 days.": "<strong>ban</strong> - 将用户封禁（不能进入该房内）两天。",
		"<strong>weekban</strong> - Bans a user from the room for a week.": "<strong>weekban</strong> - 将用户封禁（ 不能进入该房内 ）一个星期。",
		"<strong>blacklist</strong> - Bans a user for a year.": "<strong>blacklist</strong> - 将用户拉黑，一年之内不能进入房里。",

		"<strong>Global punishments</strong>:": "<strong>全服处罚</strong>:",
		"<strong>lock</strong> - Locks a user (makes them unable to talk in any rooms or PM non-staff) for 2 days.": "<strong>lock</strong> - 封锁用户（无法在任何房内发言或与全服见习管理以下的用户私信）两天。",
		"<strong>weeklock</strong> - Locks a user for a week.": "<strong>weeklock</strong> - 封锁用户一个星期。",
		"<strong>namelock</strong> - Locks a user and prevents them from having a username for 2 days.": "<strong>namelock</strong> - 封锁用户ip，两天内不能使用任何用户名。",
		"<strong>globalban</strong> - Globally bans (makes them unable to connect and play games) for a week.": "<strong>globalban</strong> - 全服封禁（使用户不能连接和玩游戏）一个星期。",

		"<strong>Indefinite global punishments</strong>:": "<strong>无期限的全服惩罚</strong>:",
		"<strong>permalock</strong> - Issued for repeated instances of bad behavior and is rarely the result of a single action. ": "<strong>permalock</strong> - 多是由于反复的糟糕行为，而很少是一次违规所导致。若自惩罚起3个月无再犯，可以在",
		'These can be appealed in the <a href="https://www.smogon.com/forums/threads/discipline-appeal-rules.3583479/">Discipline Appeal</a>': '<a href="https://www.smogon.com/forums/threads/discipline-appeal-rules.3583479/">纪律申诉</a>',
		" forum after at least 3 months without incident.": "论坛申诉。",
		"<strong>permaban</strong> - Unappealable global ban typically issued for the most severe cases of offensive/inappropriate behavior.": "<strong>permaban</strong> - 无法申诉的全服封禁。多是由最严重的冒犯或不当行为导致的。",

		"<strong>Room drivers (%)</strong> can use:": "<strong>见习管理（%）</strong> 可以使用",
		"- /warn OR /k <em>username</em>: warn a user and show the Pok&eacute;mon Showdown rules": "- /warn 或 /k <em>用户名</em>: 警告用户并显示Pok&eacute;mon Showdown的规则",
		"- /mute OR /m <em>username</em>: 7 minute mute": "- /mute 或 /m <em>用户名</em>: 禁言七分钟",
		"- /hourmute OR /hm <em>username</em>: 60 minute mute": "- /hourmute 或 /hm <em>用户名</em>: 禁言一个小时",
		"- /unmute <em>username</em>: unmute": "- /unmute <em>用户名</em>: 解除禁言",
		"- /hidetext <em>username</em>: hide a user's messages from the room": "- /hidetext <em>用户名</em>: 在房间中隐藏该用户发送的消息",
		"- /announce OR /wall <em>message</em>: make an announcement": "- /announce 或 /wall <em>信息</em>: 公告信息",
		"- /modlog <em>username</em>: search the moderator log of the room": "- /modlog <em>用户名</em>: 搜锁用户在房间管理档案中的记录",
		"- /modnote <em>note</em>: add a moderator note that can be read through modlog": "- /modnote <em>信息</em>: 在房间管理档案中留下信息，只有见习管理以上能阅读",

		"<strong>Room moderators (@)</strong> can also use:": "<strong>管理员（@）</strong> 可以使用：",
		"- /roomban OR /rb <em>username</em>: ban user from the room": "- /roomban 或 /rb <em>用户名</em>: 将用户封禁",
		"- /roomunban <em>username</em>: unban user from the room": "- /roomunban <em>用户名</em>: 解除封禁",
		"- /roomvoice <em>username</em>: appoint a room voice": "- /roomvoice <em>用户名</em>: 升用户为信任用户",
		"- /roomdevoice <em>username</em>: remove a room voice": "- /roomdevoice <em>用户名</em>: 移除信任用户权限",
		"- /staffintro <em>intro</em>: set the staff introduction that will be displayed for all staff joining the room": "- /staffintro <em>介绍</em>: 设置管理公告，会对进入房间的见习管理或以上人员显示",
		"- /roomsettings: change a variety of room settings, namely modchat": "- /roomsettings: 显示并修改房内的某些设置，比如modchat",

		"<strong>Room owners (#)</strong> can also use:": "<strong>房主（#）</strong> 可以使用：",
		"- /roomintro <em>intro</em>: set the room introduction that will be displayed for all users joining the room": "- /roomintro <em>介绍</em>: 设置房内公告，会对进入房间的所有用户显示",
		"- /rules <em>rules link</em>: set the room rules link seen when using /rules": "- /rules <em>规则链接</em>: 设定/rules显示的规则链接",
		"- /roommod, /roomdriver <em>username</em>: appoint a room moderator/driver": "- /roommod, /roomdriver <em>用户名</em>: 升用户为见习管理/管理员",
		"- /roomdemod, /roomdedriver <em>username</em>: remove a room moderator/driver": "- /roomdemod, /roomdedriver <em>用户名</em>: 移除见习管理/管理员权限",
		"- /roomdeauth <em>username</em>: remove all room auth from a user": "- /roomdeauth <em>用户名</em>: 取消用户所有房间权限",
		"- /declare <em>message</em>: make a large blue declaration to the room": "- /declare <em>信息</em>: 用蓝色高亮发布公告信息",
		"- !htmlbox <em>HTML code</em>: broadcast a box of HTML code to the room": "- !htmlbox <em>HTML的代码</em>: 在房内广播HTML代码框",
		"- !showimage <em>, [width], [height]</em>: show an image to the room": "- !showimage <em>[url], [宽度], [高度]</em>: 在房内显示图片",
		"- /roomsettings: change a variety of room settings, including modchat, capsfilter, etc": "- /roomsettings: 显示并修改房内的某些设置，包括modchat，大写限制等",

		"More detailed help can be found in the <a href=\"https://www.smogon.com/forums/posts/6774654/\">roomauth guide</a>": "需要更多帮助可以阅读 <a href=\"https://www.smogon.com/forums/posts/6774654/\">房间管理指导</a>",

		"Tournament Help:": "房赛指令",
		"- /tour create <em>format</em>, elimination: create a new single elimination tournament in the current room.": "- /tour create <em>分级</em>, elimination: 在房里开单淘汰赛（报名）。",
		"- /tour create <em>format</em>, roundrobin: create a new round robin tournament in the current room.": "- /tour create <em>分级</em>, roundrobin: 在房里开循环赛（报名）。",
		"- /tour end: forcibly end the tournament in the current room": "- /tour end: 强行终止房里的比赛",
		"- /tour start: start the tournament in the current room": "- /tour start: 报名完后开始比赛",
		"- /tour banlist [pokemon], [talent], [...]: ban moves, abilities, Pokémon or items from being used in a tournament (it must be created first)": "- /tour banlist [宝可梦], [特性], [...]: 在比赛里禁止某些技能，特性，宝可梦或物品（开比赛前设定）",

		"More detailed help can be found in the <a href=\"https://www.smogon.com/forums/posts/6777489/\">tournaments guide</a>": "需要更多帮助可以阅读 <a href=\"https://www.smogon.com/forums/posts/6777489/\">比赛指导</a>",

		"Your status cannot be updated while you are locked or semilocked.": "锁定或半锁定时无法更新您的状态.",
		"Your status is too long; it must be under ${maxLength} characters.": "您的状态太长了;它必须低于${maxLength}个字符.",
		"Your status contains a banned word.": "您的状态里包含禁止使用的词.",
		"Your status has been set to: ${target}.": "您的状态已设置为: ${target}.", "You are now marked as busy.": "您现在被标记为忙碌.",
		"You are now marked as away. Send a message or use /back to indicate you are back.": "您现在被标记为离开。发送消息或使用/back回到原来的状态.",
		"You are already marked as back.": "您已回到原来的状态.",
		"You are no longer marked as busy.": "您已停止标记为忙碌.",

		"You must choose a name before you can talk.": "发言之前请登录用户",
		"You are ${lockType} and can't talk in chat. ${lockExpiration}": "您被${lockType}封锁，因此不能发言。${lockExpiration}",
		"Get help with [TN: your lock]this": "关于被封锁提问，请求帮助",
		"You are muted and cannot talk in this room.": "您被暂时禁言，因此不能发言",
		"Because moderated chat is set, your account must be at least one week old and you must have won at least one ladder game to speak in this room.": "房间管控，天梯赢了一局并且注册超过一个星期的用户才能发言",
		"Because moderated chat is set, your account must be staff in a public room or have a global rank to speak in this room.": "房间管控，见习管理或全服信任用户以上的用户才能发言",
		"Because moderated chat is set, you must be of rank ${groupName} or higher to speak in this room.": "房间管控，${groupName}权限以上的用户才能发言",
		"Your message can't be blank.": "发言时不能留空白",
		"Your message is too long: ": "您的句子太长了",
		"Your message contains banned characters.": "发言内容包含了禁止词汇",
		"This room has slow-chat enabled. You can only talk once every ${time} seconds.": "限速聊天，每${time}秒钟才能发言",
		"Your username contains a phrase banned by this room.": "用户名包含了禁止词汇",
		"Your status message contains a phrase banned by this room.": "状态内容包含了禁止词汇",

		"You are ${lockType} and can only private message members of the global moderation team. ${lockExpiration}": "你处于${lockType}的状态，这表示你只能私聊发消息给全服管理。${lockExpiration}",
		"Get help with this": "用这个请求帮助",
		"The user \"${targetUser.name}\" is locked and cannot be PMed.": "\"${targetUser.name}\"被锁定了，因此不能私聊他。",
		"On this server, you must be of rank ${groupName} or higher to PM users.": "你必须是${groupName}以上的玩家才能在这个服务器里私信别人。",
		"This user is blocking private messages right now.": "这个人拒收私信。",
		"This ${Config.groups[targetUser.group].name} is too busy to answer private messages right now. Please contact a different staff member.": "${Config.groups[targetUser.group].name}太忙了，另找个全服管理来处理吧。",
		"If you need help, try opening a <a href=\"view-help-request\" class=\"button\">help ticket</a>": "如果你需要帮助，试试创建一个<a href=\"view-help-request\" class=\"button\">帮助请求</a>",
		"You are blocking private messages right now.": "你现在已拒收私信。",
		"You are blocking challenges right now.": "",

		"Your message contained banned words in this room.": "发言内容包含了房间内禁止词汇",
		"You can't send the same message again so soon.": "同样的句子不能及时发出",
		"Due to this room being a high traffic room, your message must contain at least two letters.": "由于此房间流量较大，因此您的消息必须至少包含两个字母",

		"You are already blocking private messages! To unblock, use /unblockpms": "您已屏蔽私信。若要恢复接收私信，请使用/unblockpms",
		"You are now blocking private messages, except from staff and ${rank}.": "您已屏蔽私信，除了管理与${rank}权限以上的用户",
		"You are now blocking private messages, except from staff and ${status} users.": "您已屏蔽私信，除了管理与${status}状态的用户",
		"You are now blocking private messages, except from staff.": "您已屏蔽私信，除了管理用户",
		"You are not blocking private messages! To block, use /blockpms": "您并未屏蔽私信。若要屏蔽私信，请使用/blockpms",
		"You are no longer blocking private messages.": "您已停止屏蔽私信",
		"You are now blocking all incoming challenge requests.": "您已屏蔽所有挑战请求",
		"You are already blocking challenges!": "您已屏蔽挑战请求",
		"You are already available for challenges!": "您已能够接收挑战请求",
		"You are available for challenges from now on.": "您从现在开始接收挑战请求",
		"You are now blocking challenges, except from staff and ${rank}.": "",
		"You are now blocking challenges, except from staff and ${status} users.": "",

		"Staff FAQ": "管理FAQ",
		"You cannot broadcast all FAQs at once.": "无法同时广播所有FAQ",
		"A user is autoconfirmed when they have won at least one rated battle and have been registered for one week or longer. In order to prevent spamming and trolling, most chatrooms only allow autoconfirmed users to chat. If you are not autoconfirmed, you can politely PM a staff member (staff have %, @, or # in front of their username) in the room you would like to chat and ask them to disable modchat. However, staff are not obligated to disable modchat.": "自动确认用户就是在天梯上赢了一次的还有注册满一周的用户。为了避免机器与熊孩子等垃圾之类的用户，PS大多数的聊天室都需要自动确认用户以上的用户才能聊天。如果你没有得到要求，你可以私言一个在房里的管理员（用户名前加%，@，#号的）。总之还是要看情况，要是管理员很忙的话或者哪里不符合要求，就只能等待",
		"How the ladder works": "什么叫做天梯",
		"Tiering FAQ": "分级评论FAQ",
		"Badge FAQ": "论坛徽章FAQ",
		"Common misconceptions about our RNG": "关于随机数发生器还是运气不好",
		"To join a room tournament, click the <strong>Join!</strong> button or type the command <code>/tour join</code> in the room's chat. You can check if your team is legal for the tournament by clicking the <strong>Validate</strong> button once you've joined and selected a team. To battle your opponent in the tournament, click the <strong>Ready!</strong> button when it appears. There are two different types of room tournaments: elimination (if a user loses more than a certain number of times, they are eliminated) and round robin (all users play against each other, and the user with the most wins is the winner).": "若想加入房赛，点一下<strong>Join!</strong> 或者在房内打一下<code>/tour join</code>。要是担心队伍有问题的话，加入房赛后可以点一下<strong>Validate</strong>。接受挑战，点一下<strong>Ready!</strong> 。共有两种比赛，淘汰赛（一般情况下只有一条命），还有循环赛（每个对手较量一次）。",
		"Frequently Asked Questions": "常见问题解答",

		"pages/faq": "pages/faq",
		"pages/ladderhelp": "pages/ladderhelp",
		"pages/rng": "pages/rng",
		"pages/staff": "pages/staff",

		"- We log PMs so you can report them - staff can't look at them without permission unless there's a law enforcement reason.": "",
		"- We log IPs to enforce bans and mutes.": "",
		"- We use cookies to save your login info and teams, and for Google Analytics and AdSense.": "",
		'- For more information, you can read our <a href="https://${Config.routes.root}/privacy">full privacy policy.</a>': '',
	},
};
