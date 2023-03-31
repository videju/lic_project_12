// window.addEventListener('load', () => {
// 	s =JSON.parse(localStorage.getItem('countdown')) || [];

//     d = [document.getElementById("countdown_thing").innerHTML]
// 	$(d).append(s)
// 	localStorage.setItem('countdown',JSON.stringify(d))
// })
function rajk(){
    // s =JSON.parse(localStorage.getItem('countdown')) || [];


	
	 d_= document.getElementById("countdown_thing")
	
		d_.innerHTML=`<section class='countdown-container'>

		<div class='days-container'>
		  <div class='days'></div>
		  <div class='days-label'>days</div>
		</div>
		
		<div class='hours-container'>
		  <div class='hours'></div>
		  <div class='hours-label'>hours</div>
		</div>
		
		<div class='minutes-container'>
		  <div class='minutes'></div>
		  <div class='minutes-label'>minutes</div>
		</div>
		
		<div class='seconds-container'>
		  <div class='seconds'></div>
		  <div class='seconds-label'>seconds</div>
		</div>
		
		</section>"	`
	
	
//   localStorage.setItem('countdown',JSON.stringify(d))
  
} 
		

const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});




// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})







const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})





if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})



const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
})


  
  //login_section code

//   const loginForm = document.querySelector("form.login");
//   const signupForm = document.querySelector("form.signup");
//   const loginBtn = document.querySelector("label.login");
//   const signupBtn = document.querySelector("label.signup");
//   const signupLink = document.querySelector(".signup-link a");
//    let   newyear = document.getElementById("policy_expiry_date")
  
//   loginBtn.onclick = (()=>{
// 	loginForm.style.marginLeft = "0%"
//   })
 
  
 
//   //
//   Your web app's Firebase configuration
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCzUeMfhReZ9dEoPL6VpsKd8lwclEjl4fY",
  authDomain: "lic-project1.firebaseapp.com",
  projectId: "lic-project1",
  storageBucket: "lic-project1.appspot.com",
  messagingSenderId: "484390798910",
  appId: "1:484390798910:web:f0dca562c5be1234e9736f"
  };
  //////////////////////////



// // // Initialize Firebase
  firebase.initializeApp(firebaseConfig)
  const auth = firebase.auth()
  const database = firebase.database()
  //set up your register function
  function register(content,content_2,content_3,content_4,content_5){
	DisplayTodos()
	rajk()
	
	 email = document.getElementById("content_1").value
	 console.log(email)
	 password = document.getElementById("content_2").value
	 full_name = document.getElementById('content_3').value
	 policy_prize = document.getElementById('content_4').value
	 policy_name= document.getElementById('content_5').value

	// console.log(email,password,full_name,policy_name,policy_prize,)
     
  if (validate_email(email) == false || validate_password(password) == false) {
    alert('Email or Password is Outta Line!!')
    return
  // Don't continue running the code
  }
  if(validate_field(full_name) == false || validate_field(policy_prize) == false ||validate_field(policy_name) == false){
  alert('One or More Extra Field is Outta Line?? ')
   
} 
//move with Auth
auth.createUserWithEmailAndPassword(email,password)
.then(function(){
//decalre user variable
var user = auth.currentUser
//add this user t ofirebase database

//create user data
var database_ref = database.ref()


//add this user to fireabse
var user_data = {
	email: email,
	full_name: full_name,
	password :  password,
	policy_prize: policy_prize,
    policy_name:policy_name,

	last_login: Date.now()

}

database_ref.child('user/' + full_name).set(user_data)





alert('User Created')
})
.catch(function(error){
 var error_code = error.code
 var error_message = error.message

 alert(error_message)
})
  }
  function validate_email(email) {
	expression = /^[^@]+@\w+(\.\w+)+\w$/
	if ( expression.test(email)==true){
		//email is good
		return true
	}else{
        //email is not good
		return false
	}
  }
  function validate_password(password){
	if(password < 6){
		return false
	}else{
		return true
	}
  }
  function validate_field(field) {
	if (field == null) {
	  return false
	}
  
	if (field.length <= 0) {
	  return false
	} else {
	  return true
	}
  }
//   var  LICRef = firebase.database().ref("players/");

//   playersRef.on("child_added", function(data, prevChildKey) {
// 	 var newPlayer = data.val();
// 	 console.log("name: " + newPlayer.name);
// 	 console.log("age: " + newPlayer.age);
// 	 console.log("number: " + newPlayer.number);
// 	 console.log("Previous Player: " + prevChildKey);
//   });
var provider = new firebase.auth.GoogleAuthProvider();

function googleSignin() {
   firebase.auth()
   
   .signInWithPopup(provider).then(function(result) {
      var token = result.credential.accessToken;
      var user = result.user;
	  if (user.email == 'coldplane567@gmail.com'){
		checkOpacity()
	  }
	  else{
		console.log("email unauthorized")
	  }
      console.log(token)
      console.log(user)
   }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
	  
      console.log(error.code)
      console.log(error.message)
   });
}

function googleSignout() {
   firebase.auth().signOut()
   unCheckOpacity()
   .then(function() {
      console.log('Signout Succesfull')
   }, function(error) {
      console.log('Signout Failed')  
   });
}

///
function checkOpacity(){
	document.getElementById('hide').style.opacity ="100%"
}
 function unCheckOpacity(){
	document.getElementById('hide').style.opacity ="0%"
}
 
 //////////////


// window.addEventListener('load', () => {
// 	todos = JSON.parse(localStorage.getItem('todos')) || [];
// 	const nameInput = document.querySelector('#name');
// 	const newTodoForm = document.querySelector('#new-todo-form');

// 	const username = localStorage.getItem('username') || '';

// 	nameInput.value = username;

// 	nameInput.addEventListener('change', (e) => {
// 		localStorage.setItem('username', e.target.value);
// 	})

// 	newTodoForm.addEventListener('submit', e => {
// 		e.preventDefault();

// 		const todo = {
// 			content_1: e.target.elements.content_1.value,
// 			content_2 : e.target.elements.content_2.value,
// 			content_3 : e.target.elements.content_3.value,
// 			content_4 : e.target.elements.content_4.value,
// 			content_5 : e.target.elements.content_5.value,
// 			content_6 : e.target.elements.list.value,
// 			// content_7: e.target.elements.countdown_thing.innerHTML,
// 			category: e.target.elements.category.value,
// 			done: false,
// 			createdAt: new Date().getTime()
// 		}

// 		todos.push(todo);

// 		localStorage.setItem('todos', JSON.stringify(todos));

// 		// Reset the form
// 		e.target.reset();

// 		DisplayTodos()
// 	})

// 	DisplayTodos()
// })

// function DisplayTodos () {
// 	const todoList = document.querySelector('#todo-list');
// 	todoList.innerHTML = "";

// 	todos.forEach(todo => {
// 		const todoItem = document.createElement('div');
// 		todoItem.classList.add('todo-item');

// 		const label = document.createElement('label');
// 		const input = document.createElement('input');
// 		const span = document.createElement('span');
// 		const content_1 = document.createElement('div');
// 		const content_2 = document.createElement('div')
// 		const content_3 = document.createElement('div')
// 		const content_4 = document.createElement('div')
// 		const content_5 = document.createElement('div')
// 		const content_6 =  document.getElementById('div')
// 		const content_7 =  document.getElementById('div')
	  
// 		const actions = document.createElement('div');
// 		const edit = document.createElement('button');
// 		const deleteButton = document.createElement('button');

// 		input.type = 'checkbox';
// 		input.checked = todo.done;
// 		span.classList.add('bubble');
// 		if (todo.category == 'personal') {
// 			span.classList.add('personal');
// 		} else {
// 			span.classList.add('business');
// 		}
// 		content.classList.add('todo-content');
// 		actions.classList.add('actions');
// 		edit.classList.add('edit');
// 		deleteButton.classList.add('delete');

// 		content.innerHTML = `<input type="text" value="${todo.content}" readonly>`;
// 		content_2.innerHTML = `<input type="text" value="${todo.content_2}" readonly>`;
// 		content_3.innerHTML = `<input type="text" value="${todo.content_3}" readonly>`;
// 		content_4.innerHTML = `<input type="text" value="${todo.content_4}" readonly>`;
		
// 		edit.innerHTML = 'Edit';
// 		deleteButton.innerHTML = 'Delete';

// 		label.appendChild(input);
// 		label.appendChild(span);
// 		actions.appendChild(edit);
// 		actions.appendChild(deleteButton);
// 		todoItem.appendChild(label);
// 		todoItem.appendChild(content_1);
// 		todoItem.appendChild(content_2)
// 		todoItem.appendChild(content_3)
// 		todoItem.appendChild(content_4)
// 		todoItem.appendChild(content_5)
// 		todoItem.appendChild(content_6)
// 		todoItem.appendChild(content_7)
// 		todoItem.appendChild(actions);

// 		todoList.appendChild(todoItem);

// 		if (todo.done) {
// 			todoItem.classList.add('done');
// 		}
		
// 		input.addEventListener('change', (e) => {
// 			todo.done = e.target.checked;
// 			localStorage.setItem('todos', JSON.stringify(todos));

// 			if (todo.done) {
// 				todoItem.classList.add('done');
// 			} else {
// 				todoItem.classList.remove('done');
// 			}

// 			DisplayTodos()

// 		})

// 		edit.addEventListener('click', (e) => {
// 			const input = content.querySelector('input');
// 			input.removeAttribute('readonly');
// 			input.focus();
// 			input.addEventListener('blur', (e) => {
// 				input.setAttribute('readonly', true);
// 				todo.content = e.target.value;
// 				todo.content_2 = e.target.value;
// 				localStorage.setItem('todos', JSON.stringify(todos));
// 				DisplayTodos()

// 			})
// 		})

// 		deleteButton.addEventListener('click', (e) => {
// 			todos = todos.filter(t => t != todo);
// 			localStorage.setItem('todos', JSON.stringify(todos));
// 			DisplayTodos()
// 		})

// 	})
// }

//////////////////////////////////////////////
/////
window.addEventListener('load', () => {
	
    //   rajk()
	todos = JSON.parse(localStorage.getItem('todos')) || [];
	const nameInput = document.querySelector('#name');
	const newTodoForm = document.querySelector('#new-todo-form');

	const username = localStorage.getItem('username') || '';

	nameInput.value = username;

	nameInput.addEventListener('change', (e) => {
		localStorage.setItem('username', e.target.value);
	})

	newTodoForm.addEventListener('submit', e => {
		e.preventDefault();
		
		const todo = {
			
			content: e.target.elements.content_1.value,
			content_2 : e.target.elements.content_2.value,
			content_3 : e.target.elements.content_3.value,
			content_4 : e.target.elements.content_4.value,
			content_5 : e.target.elements.content_5.value,
			content_6 : e.target.elements.list.value,
		    content_7 :document.getElementById("countdown_thing").innerHTML,
		
	        
			category: e.target.elements.category.value,
			done: false,
			createdAt: new Date().getTime()
		}

		todos.push(todo);

		localStorage.setItem('todos', JSON.stringify(todos));

		// Reset the form
		e.target.reset();

		DisplayTodos()
	})
        
	DisplayTodos()
	
})

function DisplayTodos (rajk) {
    
	const todoList = document.querySelector('#todo-list');
	todoList.innerHTML = "";
	// value_changed()
	todos.forEach(todo => {
		const todoItem = document.createElement('div');
		todoItem.classList.add('todo-item');
		
		// 	 rajk = document.getElementById('countdown_thing').innerHTML +=  `<section class='countdown-container'>
  
		// 	<div class='days-container'>
		// 	  <div class='days'></div>
		// 	  <div class='days-label'>days</div>
		// 	</div>
			
		// 	<div class='hours-container'>
		// 	  <div class='hours'></div>
		// 	  <div class='hours-label'>hours</div>
		// 	</div>
			
		// 	<div class='minutes-container'>
		// 	  <div class='minutes'></div>
		// 	  <div class='minutes-label'>minutes</div>
		// 	</div>
			
		// 	<div class='seconds-container'>
		// 	  <div class='seconds'></div>
		// 	  <div class='seconds-label'>seconds</div>
		// 	</div>
			
		//   </section>"	`
		
    
		const label = document.createElement('label');
		const input = document.createElement('input');
		const span = document.createElement('span');
		const content_1 = document.createElement('div');
		const content_2 = document.createElement('div')
		const content_3 = document.createElement('div')
		const content_4 = document.createElement('div')
		const content_5 = document.createElement('div')
		const content_6 = document.createElement('div')
	    const content_7 = document.createElement('div')
		
		content_7.style.width = '100%'
		const actions = document.createElement('div');
		const edit = document.createElement('button');
		const deleteButton = document.createElement('button');

		input.type = 'checkbox';
		input.checked = todo.done;
		span.classList.add('bubble');
		if (todo.category == 'personal') {
			span.classList.add('personal');
		} else {
			span.classList.add('business');
		}
		content.classList.add('todo-content');
		actions.classList.add('actions');
		edit.classList.add('edit');
		deleteButton.classList.add('delete');

		content_1.innerHTML = `<input type="text" value="${todo.content}" readonly>`;
		content_2.innerHTML = `<input type="text" value="${todo.content_2}" readonly>`;
		content_3.innerHTML = `<input type="text" value="${todo.content_3}" readonly>`;
		content_4.innerHTML = `<input type="text" value="${todo.content_4}" readonly>`;
		content_5.innerHTML = `<input type="text" value="${todo.content_5}" readonly>`
		content_6.innerHTML = `<input type="text" value="${todo.content_6}" readonly>`
		content_7.innerHTML = `<input type="text" value="${todo.content_7}" readonly>`
		//  var selectedValue = content_6;
		// if(selectedValue =="monthly"){
		 
		// 	const countDownClock = (number = 100, format = 'seconds') => {
	  
		// 		const d = document;
		// 		d.innerHTML = null
		// 		const daysElement = content_7.querySelector(".days");
		// 		const hoursElement = content_7.querySelector('.hours');
		// 		const minutesElement = content_7.querySelector('.minutes');
		// 		const secondsElement = content_7.querySelector('.seconds');
				
		// 		let countdown;
		// 		convertFormat(format);
				
				
		// 		function convertFormat(format) {
		// 		  switch(format) {
		// 			case 'seconds':
		// 			  return timer(number);
		// 			case 'minutes':
		// 			  return timer(number * 60);
		// 			  case 'hours':
		// 			  return timer(number * 60 * 60);
		// 			case 'days':
		// 			  return timer(number * 60 * 60 * 24);             
		// 		  }
		// 		}
			  
		// 		function timer(seconds) {
		// 		  const now = Date.now();
		// 		  const then = now + seconds * 1000;
			  
		// 		  countdown = setInterval(() => {
		// 			const secondsLeft = Math.round((then - Date.now()) / 1000);
			  
		// 			if(secondsLeft <= 0) {
		// 			  clearInterval(countdown);
		// 			  return;
		// 			};
			  
		// 			displayTimeLeft(secondsLeft);
		// 	        console.loaf(secondsLeft)
		// 		  },1000);
		// 		}
			  
		// 		function displayTimeLeft(seconds) {
		// 		  daysElement.textContent = Math.floor(seconds / 86400);
		// 		  hoursElement.textContent = Math.floor((seconds % 86400) / 3600);
		// 		  minutesElement.textContent = Math.floor((seconds % 86400) % 3600 / 60);
		// 		  secondsElement.textContent = seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60;
		// 		  console.log(displayTimeLeft)
		// 		}
		// 	  }
			  
			  
		// 	  /*
		// 		start countdown
		// 		enter number and format
		// 		days, hours, minutes or seconds
		// 	  */
		// 	  countDownClock(30, 'days');
			 
		// 	}else if (selectedValue=="quarterly") {
		// 		const countDownClock = (number = 100, format = 'seconds') => {
					
		// 			const d = document;
		// 			d.innerHTML = null
		// 			const daysElement = d.querySelector('.days');
		// 			const hoursElement = d.querySelector('.hours');
		// 			const minutesElement = d.querySelector('.minutes');
		// 			const secondsElement = d.querySelector('.seconds');
		// 			let countdown;
		// 			convertFormat(format);
					
					
		// 			function convertFormat(format) {
		// 			  switch(format) {
		// 				case 'seconds':
		// 				  return timer(number);
		// 				case 'minutes':
		// 				  return timer(number * 60);
		// 				  case 'hours':
		// 				  return timer(number * 60 * 60);
		// 				case 'days':
		// 				  return timer(number * 60 * 60 * 24);             
		// 			  }
		// 			}
				  
		// 			function timer(seconds) {
		// 			  const now = Date.now();
		// 			  const then = now + seconds * 1000;
				  
		// 			  countdown = setInterval(() => {
		// 				const secondsLeft = Math.round((then - Date.now()) / 1000);
				  
		// 				if(secondsLeft <= 0) {
		// 				  clearInterval(countdown);
		// 				  return;
		// 				};
				  
		// 				displayTimeLeft(secondsLeft);
				  
		// 			  },1000);
		// 			}
				  
		// 			function displayTimeLeft(seconds) {
		// 			  daysElement.textContent = Math.floor(seconds / 86400);
		// 			  hoursElement.textContent = Math.floor((seconds % 86400) / 3600);
		// 			  minutesElement.textContent = Math.floor((seconds % 86400) % 3600 / 60);
		// 			  secondsElement.textContent = seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60;
		// 			}
		// 		  }
				  
				  
		// 		  /*
		// 			start countdown
		// 			enter number and format
		// 			days, hours, minutes or seconds
		// 		  */
		// 		  countDownClock(90, 'days');
					  
		// 	}else if(selectedValue== "halfyearly") {
		// 		const countDownClock = (number = 100, format = 'seconds') => {
		// 			SavesecondsLeft= JSON.parse(localStorage.getItem('secondleft')) || []
		// 			const d = document;
		// 			const daysElement = d.querySelector('.days');
		// 			const hoursElement = d.querySelector('.hours');
		// 			const minutesElement = d.querySelector('.minutes');
		// 			const secondsElement = d.querySelector('.seconds');
		// 			let countdown;
		// 			convertFormat(format);
					
					
		// 			function convertFormat(format) {
		// 			  switch(format) {
		// 				case 'seconds':
		// 				  return timer(number);
		// 				case 'minutes':
		// 				  return timer(number * 60);
		// 				  case 'hours':
		// 				  return timer(number * 60 * 60);
		// 				case 'days':
		// 				  return timer(number * 60 * 60 * 24);             
		// 			  }
		// 			}
				  
		// 			function timer(seconds) {
		// 			  const now = Date.now();
		// 			  const then = now + seconds * 1000;
				  
		// 			  countdown = setInterval(() => {
		// 				const secondsLeft = Math.round((then - Date.now()) / 1000);
				  
		// 				if(secondsLeft <= 0) {
		// 				  clearInterval(countdown);
		// 				  return;
		// 				};
				  
		// 				displayTimeLeft(secondsLeft);
				  
		// 			  },1000);
						 
		// 			}
				  
		// 			function displayTimeLeft(seconds) {
		// 			  daysElement.textContent = Math.floor(seconds / 86400);
		// 			  hoursElement.textContent = Math.floor((seconds % 86400) / 3600);
		// 			  minutesElement.textContent = Math.floor((seconds % 86400) % 3600 / 60);
		// 			  secondsElement.textContent = seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60;
		// 			}
		// 		  }
				  
					
		// 		  /*
		// 			start countdown
		// 			enter number and format
		// 			days, hours, minutes or seconds
		// 		  */
		// 		  countDownClock(180, 'days');
		// 	}else if(selectedValue== "yearly") {
		// 			const countDownClock = (number = 100, format = 'seconds') => {
		  
		// 				const d = document;
		// 				const daysElement = d.querySelector('.days');
		// 				const hoursElement = d.querySelector('.hours');
		// 				const minutesElement = d.querySelector('.minutes');
		// 				const secondsElement = d.querySelector('.seconds');
		// 				let countdown;
		// 				convertFormat(format);
						
						
		// 				function convertFormat(format) {
		// 				  switch(format) {
		// 					case 'seconds':
		// 					  return timer(number);
		// 					case 'minutes':
		// 					  return timer(number * 60);
		// 					  case 'hours':
		// 					  return timer(number * 60 * 60);
		// 					case 'days':
		// 					  return timer(number * 60 * 60 * 24);             
		// 				  }
		// 				}
					  
		// 				function timer(seconds) {
		// 				  const now = Date.now();
		// 				  const then = now + seconds * 1000;
					  
		// 				  countdown = setInterval(() => {
		// 					const secondsLeft = Math.round((then - Date.now()) / 1000);
					  
		// 					if(secondsLeft <= 0) {
		// 					  clearInterval(countdown);
		// 					  return;
		// 					};
					  
		// 					displayTimeLeft(secondsLeft);
					  
		// 				  },1000);
		// 				}
					  
		// 				function displayTimeLeft(seconds) {
		// 				  daysElement.textContent = Math.floor(seconds / 86400);
		// 				  hoursElement.textContent = Math.floor((seconds % 86400) / 3600);
		// 				  minutesElement.textContent = Math.floor((seconds % 86400) % 3600 / 60);
		// 				  secondsElement.textContent = seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60;
		// 				}
		// 			  }
					  
					  
		// 			  /*
		// 				start countdown
		// 				enter number and format
		// 				days, hours, minutes or seconds
		// 			  */
		// 			  countDownClock(365, 'days');
		// 		}
		// content_8.innerHTML = `<input type="text" value="${todo.content_8}" readonly>`



		
		edit.innerHTML = 'Edit';
		deleteButton.innerHTML = 'Delete';
		// document.getElementById("countdown_thing").innerHTML+=`	<section class='countdown-container'>

		// // 	<div class='days-container'>
		// // 	  <div class='days'></div>
		// // 	  <div class='days-label'>days</div>
		// // 	</div>
			
		// // 	<div class='hours-container'>
		// // 	  <div class='hours'></div>
		// // 	  <div class='hours-label'>hours</div>
		// // 	</div>
			
		// // 	<div class='minutes-container'>
		// // 	  <div class='minutes'></div>
		// // 	  <div class='minutes-label'>minutes</div>
		// // 	</div>
			
		// // 	<div class='seconds-container'>
		// // 	  <div class='seconds'></div>
		// // 	  <div class='seconds-label'>seconds</div>
		// // 	</div>
			
		// //   </section>"` ,
		label.appendChild(input);
		label.appendChild(span);
		actions.appendChild(edit);
		actions.appendChild(deleteButton);
		todoItem.appendChild(label);
		todoItem.appendChild(content_1);
		todoItem.appendChild(content_2)
		todoItem.appendChild(content_3)
		todoItem.appendChild(content_4)
		todoItem.appendChild(content_5)
		todoItem.appendChild(content_6)
	    todoItem.appendChild(content_7)

		// todoItem.appendChild(content_8)

		
		
		todoItem.appendChild(actions);

		todoList.appendChild(todoItem);

		if (todo.done) {
			todoItem.classList.add('done');
		}
		
		input.addEventListener('change', (e) => {
			todo.done = e.target.checked;
			localStorage.setItem('todos', JSON.stringify(todos));

			if (todo.done) {
				todoItem.classList.add('done');
			} else {
				todoItem.classList.remove('done');
			}

			DisplayTodos()

		})

		edit.addEventListener('click', (e) => {
			const input = content.querySelector('input');
			input.removeAttribute('readonly');
			input.focus();
			input.addEventListener('blur', (e) => {
				input.setAttribute('readonly', true);
				todo.content_1 = e.target.value;
				todo.content_2 = e.target.value;
				todo.content_3 = e.target.value;
				todo.content_4 = e.target.value;
				todo.content_5 = e.target.value;
				todo.content_6 = e.target.value;
				todo.content_7 = e.target.value;

			


			
				localStorage.setItem('todos', JSON.stringify(todos));
				DisplayTodos()

			})
		})

		deleteButton.addEventListener('click', (e) => {
			todos = todos.filter(t => t != todo);
			document.getElementById("countdown_thing").innerHTML=""
			localStorage.setItem('todos', JSON.stringify(todos));
			DisplayTodos()
		})

	})
	
}

//////
function getSelectValue()
{    
	var selectedValue = document.getElementById("list").value;
	console.log(selectedValue);
}
// function value_changed(){
	
	var selectedValue = document.getElementById("list").value;
	if(selectedValue =="monthly"){
		 
        const countDownClock = (number = 100, format = 'seconds') => {
  
			const d = document;
			d.innerHTML = null
			const daysElement = d.querySelector('.days');
			const hoursElement = d.querySelector('.hours');
			const minutesElement = d.querySelector('.minutes');
			const secondsElement = d.querySelector('.seconds');
			
			let countdown;
			convertFormat(format);
			
			
			function convertFormat(format) {
			  switch(format) {
				case 'seconds':
				  return timer(number);
				case 'minutes':
				  return timer(number * 60);
				  case 'hours':
				  return timer(number * 60 * 60);
				case 'days':
				  return timer(number * 60 * 60 * 24);             
			  }
			}
		  
			function timer(seconds) {
			  const now = Date.now();
			  const then = now + seconds * 1000;
		  
			  countdown = setInterval(() => {
				const secondsLeft = Math.round((then - Date.now()) / 1000);
		  
				if(secondsLeft <= 0) {
				  clearInterval(countdown);
				  return;
				};
		  
				displayTimeLeft(secondsLeft);
		  
			  },1000);
			}
		  
			function displayTimeLeft(seconds) {
			  daysElement.value = Math.floor(seconds / 86400);
			  hoursElement.textContent = Math.floor((seconds % 86400) / 3600);
			  minutesElement.textContent = Math.floor((seconds % 86400) % 3600 / 60);
			  secondsElement.textContent = seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60;
			  console.log(displayTimeLeft)
			}
		  }
		  
		  
		  /*
			start countdown
			enter number and format
			days, hours, minutes or seconds
		  */
		  countDownClock(30, 'days');
		 
		}else if (selectedValue=="quarterly") {
			const countDownClock = (number = 100, format = 'seconds') => {
                
				const d = document;
				d.innerHTML = null
				const daysElement = d.querySelector('.days');
				const hoursElement = d.querySelector('.hours');
				const minutesElement = d.querySelector('.minutes');
				const secondsElement = d.querySelector('.seconds');
				let countdown;
				convertFormat(format);
				
				
				function convertFormat(format) {
				  switch(format) {
					case 'seconds':
					  return timer(number);
					case 'minutes':
					  return timer(number * 60);
					  case 'hours':
					  return timer(number * 60 * 60);
					case 'days':
					  return timer(number * 60 * 60 * 24);             
				  }
				}
			  
				function timer(seconds) {
				  const now = Date.now();
				  const then = now + seconds * 1000;
			  
				  countdown = setInterval(() => {
					const secondsLeft = Math.round((then - Date.now()) / 1000);
			  
					if(secondsLeft <= 0) {
					  clearInterval(countdown);
					  return;
					};
			  
					displayTimeLeft(secondsLeft);
			  
				  },1000);
				}
			  
				function displayTimeLeft(seconds) {
				  daysElement.textContent = Math.floor(seconds / 86400);
				  hoursElement.textContent = Math.floor((seconds % 86400) / 3600);
				  minutesElement.textContent = Math.floor((seconds % 86400) % 3600 / 60);
				  secondsElement.textContent = seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60;
				}
			  }
			  
			  
			  /*
				start countdown
				enter number and format
				days, hours, minutes or seconds
			  */
			  countDownClock(90, 'days');
				  
		}else if(selectedValue== "halfyearly") {
			const countDownClock = (number = 100, format = 'seconds') => {
				SavesecondsLeft= JSON.parse(localStorage.getItem('secondleft')) || []
				const d = document;
				const daysElement = d.querySelector('.days');
				const hoursElement = d.querySelector('.hours');
				const minutesElement = d.querySelector('.minutes');
				const secondsElement = d.querySelector('.seconds');
				let countdown;
				convertFormat(format);
				
				
				function convertFormat(format) {
				  switch(format) {
					case 'seconds':
					  return timer(number);
					case 'minutes':
					  return timer(number * 60);
					  case 'hours':
					  return timer(number * 60 * 60);
					case 'days':
					  return timer(number * 60 * 60 * 24);             
				  }
				}
			  
				function timer(seconds) {
				  const now = Date.now();
				  const then = now + seconds * 1000;
			  
				  countdown = setInterval(() => {
					const secondsLeft = Math.round((then - Date.now()) / 1000);
			  
					if(secondsLeft <= 0) {
					  clearInterval(countdown);
					  return;
					};
			  
					displayTimeLeft(secondsLeft);
			  
				  },1000);
					 
				}
			  
				function displayTimeLeft(seconds) {
				  daysElement.textContent = Math.floor(seconds / 86400);
				  hoursElement.textContent = Math.floor((seconds % 86400) / 3600);
				  minutesElement.textContent = Math.floor((seconds % 86400) % 3600 / 60);
				  secondsElement.textContent = seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60;
				}
			  }
			  
			    
			  /*
				start countdown
				enter number and format
				days, hours, minutes or seconds
			  */
			  countDownClock(180, 'days');
		}else if(selectedValue== "yearly") {
				const countDownClock = (number = 100, format = 'seconds') => {
	  
					const d = document;
					const daysElement = d.querySelector('.days');
					const hoursElement = d.querySelector('.hours');
					const minutesElement = d.querySelector('.minutes');
					const secondsElement = d.querySelector('.seconds');
					let countdown;
					convertFormat(format);
					
					
					function convertFormat(format) {
					  switch(format) {
						case 'seconds':
						  return timer(number);
						case 'minutes':
						  return timer(number * 60);
						  case 'hours':
						  return timer(number * 60 * 60);
						case 'days':
						  return timer(number * 60 * 60 * 24);             
					  }
					}
				  
					function timer(seconds) {
					  const now = Date.now();
					  const then = now + seconds * 1000;
				  
					  countdown = setInterval(() => {
						const secondsLeft = Math.round((then - Date.now()) / 1000);
				  
						if(secondsLeft <= 0) {
						  clearInterval(countdown);
						  return;
						};
				  
						displayTimeLeft(secondsLeft);
				  
					  },1000);
					}
				  
					function displayTimeLeft(seconds) {
					  daysElement.textContent = Math.floor(seconds / 86400);
					  hoursElement.textContent = Math.floor((seconds % 86400) / 3600);
					  minutesElement.textContent = Math.floor((seconds % 86400) % 3600 / 60);
					  secondsElement.textContent = seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60;
					}
				  }
				  
				  
				  /*
					start countdown
					enter number and format
					days, hours, minutes or seconds
				  */
				  countDownClock(365, 'days');
			}
// 		}
	
		
	

// value_changed()
