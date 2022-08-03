// function first() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("1");
//     }, 1000);
//   });
// }

// function second() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("2");
//     }, 1000);
//   });
// }

// function third() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("3");
//     }, 2000);
//   });
// }

// async function count() {
//   let one = await first();
//   let two = await second();
//   let three = await third();

//   console.log(one);
//   console.log(two);
//   console.log(three);
// }

// // first()
// //   .then((data) => console.log(data))
// //   .then(second)
// //   .then((data) => console.log(data))
// //   .then(third)
// //   .then((data) => console.log(data))
// //   .catch((err) => console.log(err));

let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["Water", "Ice"],
  holder: ["Cone", "Cup", "Stick"],
  toppings: ["Chocolate", "Peanuts"],
};

// let order = (fruit_name, call_production) => {
//   setTimeout(() => {
//     console.log(`${stocks.Fruits[fruit_name]} was selected`);
//     call_production();
//   }, 2000);
// };

// let production = () => {
//   setTimeout(() => {
//     console.log("production has started");
//     setTimeout(() => {
//       console.log("The fruit has been chopped");
//     }, 2000);
//   }, 0000);
// };

// order(0, production);

// callback hades
// let production = () => {
//   setTimeout(() => {
//     console.log("production has started");
//     setTimeout(() => {
//       console.log("The fruit has been chopped");
//       setTimeout(() => {
//         console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} Added`);
//         setTimeout(() => {
//           console.log("start the machine");
//           setTimeout(() => {
//             console.log(`Ice cream placed on ${stocks.holder[1]}`);
//             setTimeout(() => {
//               console.log(`${stocks.toppings[0]} as toppings`);
//               setTimeout(() => {
//                 console.log("serve Ice cream");
//               }, 2000);
//             }, 3000);
//           }, 2000);
//         }, 1000);
//       }, 1000);
//     }, 2000);
//   }, 0000);
// };

// production();

// let is_shop_open = true;

// let order = (time, work) => {
//   return new Promise((resolve, reject) => {
//     if (is_shop_open) {
//       setTimeout(() => {
//         resolve(work());
//       }, time);
//     } else {
//       reject(console.log("Our shop is closed"));
//     }
//   });
// };

// order(2000, () => {
//   console.log(`${stocks.Fruits[0]} was selected`);
// })
//   .then(() => {
//     return order(0000, () => {
//       console.log(`production has started`);
//     });
//   })
//   .then(() => {
//     return order(0000, () => {
//       console.log(`Fruit has been chopped`);
//     });
//   })
//   .then(() => {
//     return order(1000, () =>
//       console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`)
//     );
//   })
//   .then(() => {
//     return order(1000, () => console.log("start the machine"));
//   })

//   .then(() => {
//     return order(2000, () =>
//       console.log(`ice cream placed on ${stocks.holder[1]}`)
//     );
//   })

//   .then(() => {
//     return order(3000, () => console.log(`${stocks.toppings[0]} as toppings`));
//   })

//   .then(() => {
//     return order(2000, () => console.log("Serve Ice Cream"));
//   })
//   .catch(() => {
//     console.log("Customer left");
//   })
//   .finally(() => {
//     console.log("end of day");
//   });

// let friendly = true;

// function sayHi() {
//   return new Promise((resolve, reject) => {
//     if (friendly) {
//       resolve("Hello!");
//     } else {
//       reject("Person ignored you");
//     }
//   });
// }

// function sayBye() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (friendly) {
//         resolve("Bye!");
//       } else {
//         reject("Person mad dogged you");
//       }
//     }, 3000);
//   });
// }

// sayHi()
//   .then((data) => {
//     console.log(data);
//   })
//   .then(sayBye)
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("go home");
//   });

// sayBye()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("go home");
//   });

// async function hello() {
//   try {
//     // const hiThere = await sayHi();
//     const byeNow = await sayBye();
//     // console.log(hiThere);
//     console.log(byeNow);
//   } catch (err) {
//     console.log(err);
//   }
// }

// hello();

let is_shop_open = true;

function time(ms) {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(resolve, ms);
    } else {
      reject(console.log("Shop is closed"));
    }
  });
}

async function kitchen() {
  try {
    // time taken to perform this 1 task
    await time(2000);
    console.log(`${stocks.Fruits[0]} was selected`);
  } catch (error) {
    console.log("Customer left", error);
  } finally {
    console.log("Day ended, shop closed");
  }
}

kitchen();

// function toppings_choice() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(console.log("which topping would you love?"));
//     }, 3000);
//   });
// }

// async function kitchen() {
//   console.log("A"); // 1
//   console.log("B"); // 2
//   console.log("C"); // 3

//   await toppings_choice(); //7

//   console.log("D"); // 8
//   console.log("E"); // 9
// }

// // Trigger the function

// kitchen();

// console.log("doing the dishes"); // 4
// console.log("cleaning the tables"); //5
// console.log("taking orders"); //6
