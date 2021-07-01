import React, {useState} from 'react';

// hooks humesha function ke andar call krenge
// useState arr return krta hai
function Counter() {
	// Aise class components mei krte the :
	// this.state = {
	// 	count: 0,
	// };
	// this.setState({
	// 	count: 1,
	// });

   console.log("render");
   // class components pe state change hone pe render call hojata tha, functional component mei render method nhi hota, yaha agar state change hoga to pura function dobara chalta hai


	// useState returns a pair of values,currentstate and a function that can be used to change the
	// currstate
	// we pass the initial value of state as argument to useState
	// count is bascially state ka naam and setcount function hai jiise count ko change krskte hai
	const [count, setCount] = useState(0); // 0 is default value
   // yeh upar wai line ek hi baar chalta hai pehli baar,re render pe useState hook nhi chalta phirse

   // isme const ya let se function banate hai, class components mei wo member fns hote the, to this pe
   // bind hojate the wo
	const handleIncrement = () => {
		setCount(count + 1);
	};

	const handleDecrement = () => {
		setCount(count - 1);
	};
	return (
		<div>
			<h1>{count}</h1>
			<button onClick={handleIncrement}>+</button>
			<button onClick={handleDecrement}>-</button>
		</div>
	);
}

export default Counter;
