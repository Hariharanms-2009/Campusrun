// Static data and demo seed data: locations, categories, students, errands, chats, trips, posts, FAQ, rewards.

const LOCS=[{n:"Canteen & Nescafe",x:24,y:28},{n:"Tech Park Xerox",x:70,y:22},{n:"Central Library",x:48,y:52},{n:"Hostel Gate 4",x:16,y:72},{n:"Admin Block",x:82,y:60},{n:"Campus Stationery Mart",x:46,y:84}];

const RUN=["Meera","Karthik","Divya","Arjun","Sneha","Vikram"];

const near=i=>[0,2,4].map((o,j)=>({n:RUN[(i+o)%6],d:40+((i*37+j*53)%160)}));

const CATS=[["food","🍔 Food & Drinks"],["xerox","🖨️ Xerox & Printouts"],["stat","✏️ Stationery"],["urgent","⚡ Urgent Favors"]];

const STEPS=["Posted","Accepted","In transit","Delivered"],SI={open:0,accepted:1,picked:2,delivered:3};

const U0={ad:{n:"Aditya Sharma",dept:"CSE",yr:"3rd Year",sec:"Sec A",roll:"21CS104",ph:"98765 43210",campus:"South Campus",upi:"aditya@okaxis",r:4.8,d:12,role:"Requester",ver:"verified",em:"aditya.s@college.edu"},
 pr:{n:"Priya Patel",dept:"ECE",yr:"2nd Year",sec:"Sec B",roll:"22EC066",ph:"98765 11022",campus:"South Campus",upi:"priya.patel@oksbi",r:5.0,d:28,role:"Runner",ver:"verified",em:"priya.p@college.edu"},
 ra:{n:"Rahul Verma",dept:"Mech",yr:"4th Year",sec:"Sec C",roll:"20ME031",ph:"99887 70011",campus:"North Campus",upi:"rahulv@ybl",r:4.6,d:41,role:"Runner",ver:"none"}};

const E0=[
 {id:"e1",cat:"food",title:"2 Masala Dosa + Filter Coffee",notes:"Extra spicy chutney please",pickup:"Canteen & Nescafe",drop:"Mech Block, Room 314",cost:120,tip:30,urg:"30m",by:"ad",runner:null,status:"open",otp:"4821"},
 {id:"e2",cat:"xerox",title:"45-page lab record printout",notes:"B&W, double-sided, stapled",pickup:"Tech Park Xerox",drop:"ECE Block Lab 2",cost:90,tip:25,urg:"1h",by:"ra",runner:null,status:"open",otp:"1357"},
 {id:"e3",cat:"stat",title:"A4 ream + 2 blue pens",notes:"Reynolds 045 if available",pickup:"Campus Stationery Mart",drop:"CSE Block",cost:310,tip:30,urg:"1h",by:"pr",runner:null,status:"open",otp:"9042"},
 {id:"e4",cat:"urgent",title:"Return my textbook",notes:"Due today, slip is inside",pickup:"Hostel Gate 4",drop:"Central Library",cost:0,tip:40,urg:"15m",by:"pr",runner:null,status:"open",otp:"2266"},
 {id:"e5",cat:"food",title:"Veg puff + cold coffee",notes:"",pickup:"Canteen & Nescafe",drop:"CSE Block, Sec A",cost:85,tip:20,urg:"15m",by:"ad",runner:"pr",status:"accepted",otp:"7319"},
 {id:"e6",cat:"xerox",title:"Assignment printout, 12 pages",notes:"Colour cover page",pickup:"Tech Park Xerox",drop:"CSE Block",cost:60,tip:25,urg:"30m",by:"ad",runner:"pr",status:"delivered",otp:"5512",reviewed:false}];

const C0={e5:[{f:"sys",t:"Priya Patel accepted this errand",ts:"12:40"},{f:"pr",t:"Hey! Ordering now, ready in 5 mins.",ts:"12:41"},{f:"ad",t:"Thanks! I’m in CSE Block, Sec A.",ts:"12:42"},{f:"pr",t:"Perfect, see you soon 👍",ts:"12:42"}],e6:[{f:"sys",t:"Priya Patel accepted this errand",ts:"11:05"},{f:"pr",t:"Delivered! Please check.",ts:"11:20"},{f:"sys",t:"✅ Delivered, PIN verified",ts:"11:20"}]};

const FAQ=[['How does CampusRun work?','Post what you need and where from. Students near that spot see it, and the first runner to accept takes the job. Chat, hand over with a PIN, then pay by UPI.'],['How do I pay my runner?','After delivery, open Review & settle. You will see the total and the runner’s UPI ID with a one-tap copy button. The tip is always on top of the item cost.'],['What is the delivery PIN?','A secret 4-digit code shown only to the requester. Share it with the runner once you are holding your item. It confirms the handover.'],['What if my runner does not show up?','Message them in chat first. If there is no reply, send us a ticket under Contact support and choose Runner no-show. You can also post the errand again.'],['What can I not request?','Alcohol, tobacco, prescription medicines, anything illegal or against your college rules. Keep errands to everyday food, printouts and stationery.'],['How does student verification work?','Add your official college email and a photo of your ID in Profile. Once confirmed, you get a ✓ Verified badge that other students can see.'],['Is my location always shared?','No. Sharing is opt-in and you can go invisible any time. Handovers happen at public campus spots.']];

const EV=[['Meera','delivered 2 masala dosas to Mech Block','🍔'],['Karthik','picked up a 30-page printout at Tech Park Xerox','🖨️'],['Divya','grabbed pens for a friend at the Stationery Mart','✏️'],['Arjun','returned a library book for a classmate','⚡'],['Sneha','fetched two cold coffees from Nescafe','🍔'],['Vikram','dropped lab records at ECE Block','🖨️']];

const WORDS=['canteen','xerox shop','library','hostel gate','stationery mart'];

const LV=[['Rookie',0,'🌱'],['Runner',150,'🏃'],['Pro',400,'⚡'],['Legend',800,'👑']];

const REW=[['pf','Profile flair 🔥',100],['bst','Priority boost for 1 errand',150],['fee','Free delivery fee for 1 errand',200],['cof','Café coupon ₹20',250],['skp','Skip-the-queue pass',300]];

const MENU={food:[['Masala Dosa',60],['Filter Coffee',20],['Veg Puff',25],['Cold Coffee',45]],stat:[['Blue pen',10],['Notebook',60],['A4 ream',310]],xerox:[],urgent:[]};

const TAGS=[['🎉','Event'],['📚','Study'],['🔎','Lost & found']];

const TRIPS0=[{id:'t1',runner:'pr',loc:'Canteen & Nescafe',min:10},{id:'t2',runner:'ra',loc:'Tech Park Xerox',min:25}];

const POSTS0=[{id:'p1',by:'pr',tag:0,t:'ECE Fest volunteers needed this Saturday. Free lunch included!',likes:['ra']},{id:'p2',by:'ra',tag:1,t:'Thermodynamics study group, Library 2nd floor, 6 pm today.',likes:[]},{id:'p3',by:'ad',tag:2,t:'Found a blue water bottle near Hostel Gate 4. Message me to claim it.',likes:['pr','ra']}];
