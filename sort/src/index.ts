import { SorterL } from './SorterL';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

// const numbersCollection = new NumbersCollection ([10,3,-5,0]);

const charactersCollection = new CharactersCollection('AsXxdgHl');

const sorter = new Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);