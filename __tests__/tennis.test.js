function getScores(playerA, playerB){

    if (playerB==1){
       switch(playerA){
           case 0:
               return "L-15"
           case 1:
               return "15-15"    
           case 2:
               return "30-15"    
           case 3:
                return "40-15"    
           case 4:
                return "A won"    
       }
    }
   
    if (playerB == 2) {
       switch(playerA){
           case 0:
               return "L-30"
           case 1:
               return "15-30"    
           case 2:
               return "30-30"    
           case 3:
                return "40-30"    
           case 4:
                return "A won"    
       }
    }
    if (playerB == 3) {
       switch(playerA){
           case 0:
               return "L-40"
           case 1:
               return "15-40"    
           case 2:
               return "30-40"    
           case 3:
               return "Deuce"    
           case 4:
                return "Adv A"    
           case 5:
                return "A won"    
   
       }
   
    }
   
   
     return "L-L"
   }
   
   
   ///////// TESTS
   
   it("should return a score of Love-Love when both scores are 0", ()=>{
       expect(getScores(0,0)).toBe("L-L");
      
      })
   
   
   it("should return a score of L-15 when one of the score is 0 and other is 1",() => {
       expect(getScores(0,1)).toBe("L-15")
   }
   )
   
   it("should return a score of 15-15 when both scores are 1",() => {
       expect(getScores(1,1)).toBe("15-15")
   }
   )
   
   
   it("should return a score of 30-15 when one score is 2 and other is 1",() => {
       expect(getScores(2,1)).toBe("30-15")
   }
   )
   
   it("should return a score of 40-15 when one score is 3 and other is 1",() => {
       expect(getScores(3,1)).toBe("40-15")
   }
   )
   
   it("should say who won when one score is 4 and other is 1",() => {
       expect(getScores(4,1)).toBe("A won")
   }
   )
   
   it("should return a score of 30-30 when both scores are 2",() => {
       expect(getScores(2,2)).toBe("30-30")
   }
   )
   
   it("should return a score of 40-40 when both scores are 3",() => {
       expect(getScores(3,3)).toBe("Deuce")
   }
   )
   it("should return a score of Adv A when one score is 4 and other is 3",() => {
       expect(getScores(4,3)).toBe("Adv A")
   }
   )