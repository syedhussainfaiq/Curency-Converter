  
  
  
     import inquirer from 'inquirer'
    
       const currency: any = {
        USD: 1, // based currency
        EUR: 0.93,
        GPB: 0.78,
        INR: 75.34,
        PKR: 280
     };

         let user_answer  = await inquirer.prompt(
    [   
         {
           name: 'from',
            message: 'Enter From currency',
            type: 'list',
          choices: ['USD','EUR','GPB','INR','PKR']
         },
         {
           name:'to',
           message: 'Enter to currency',
           type: 'list',
           choices: ['USD','EUR','GPB','INR','PKR']
         },
         {
            name: 'amount',
            message: 'Enter Your Amount',
            type: 'number'
         }

    ]
);
    
          
            let fromAmount = currency [user_answer.from] 
            let toAmount = currency[user_answer.to]
            let amount = user_answer.amount
            let baseAmount = amount / fromAmount // USD based currency
            let  convertedAmount = baseAmount * toAmount
            console.log(convertedAmount);  
          