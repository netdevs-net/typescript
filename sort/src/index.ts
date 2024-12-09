import { SorterL } from './SorterL';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

// const numbersCollection = new NumbersCollection ([10,3,-5,0]);

// const charactersCollection = new CharactersCollection('AsXxdgHl');
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);



const sorter = new SorterL(linkedList);
sorter.sort();
linkedList.print();

// console.log(charactersCollection.data);