// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

console.log(returnRandBase())
// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

console.log(mockUpStrand(returnRandBase))


const pAequorFactory = (diffNumbers, dnaBases) => { 
  return { 
    _specimenNum: diffNumbers,
    _dna: dnaBases,

    mutate() { 
      let newBase = returnRandBase(); 
      let randIndex = Math.floor(Math.random() * this.dna.length);
      while(this.dna[randIndex] === newBase) { 
        newBase === returnRandBase();
      } 
      this.dna[randIndex] = newBase;
      return this.dna;
    },

    compareDNA(pAequor) { 
      let identCounter = 0; 

      for ( let i = 0; i < this.dna.length; i++) 
        if (pAequor[i] === this.dna[i]) { 
          identCounter += 1;
        }
        percentIdent = (identCounter / this.dna.length) * 100;
        console.log(`These DNA Strands have ${percentIdent}% in common`)

      },

      willLikelySurvive() { 
        let counter = 0; 
        for (let i = 0; i < this.dna.length; i++) 
          if (this.dna[i] === 'C' || this.dna[i] === 'G') { 
            counter += 1;
          }
          let percentBase = (counter / this.dna.length) * 100 ;
          if (percentBase >= 60) { 
            return true;
          } else { 
            return false;
          }
      }
  }
}

console.log(pAequorFactory(213, ['A', 'T', 'C', 'G']).willLikelySurvive())

let PAequorArray = []; 
for ( let i = 1; i <= 30; i++) { 
  PAequorArray.push(i, mockUpStrand())
}

console.log(PAequorArray)
