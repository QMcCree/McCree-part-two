/* 
Step 1: Prompt the user for the pet's name
Step 2: Keep track of the pet's happiness and energy levels. Both start out at zero.
Step 3: Use a loop to repeat the following six times…
○ Prompt the user for an action. They can type one of three options: feed, pet, or walk.
○ The feed option increases energy by 2.
○ The pet option increases happiness by 1.
○ The walk option increases happiness by 2 but decreases energy by 1.
Step 4: If the user chooses "walk" but the energy level is currently at zero, do not increase happiness
or decrease energy. Instead, alert the following message: "Not enough energy to enjoy a
walk."
Step 5: At the end, after the six actions, log the pet's name, happiness, and energy level to the
console.
*/

let petsName = prompt("Name your pet.");
let happiness = 0;
let energy = 0;
for (let i = 0; i < 6; i++) {
let action = prompt("feed, pet, or walk?");
if(action === "walk" && energy === 0 ){
   alert("Not enough energy to enjoy a walk");
}
if(action === "walk") {
      happiness += 2;
      energy -= 1;
      
    
 } else if (action === "feed") {
      energy += 2; 
   } else if (action === "pet") {
      happiness += 1;
   }
      
}
console.log (petsName  +  " has " +  happiness  + " and " +  energy  + ".");




