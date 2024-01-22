import { defineStore } from 'pinia';
import { reactive, computed } from 'vue';
import useUtility from '@/composables/utility';

export const useTableDataStore = defineStore('tableData', () => {

  const { capitalizeFirst } = useUtility();

  /*
   * State
   */
  const dataStructures = reactive(['array', 'list', 'stack', 'queue', 'set', 'map']);
  const operations = reactive(['declare', 'initialize', 'get', 'set', 'iterate', 'add', 'remove', 'insert']);
  const regexExpressions = reactive([
    [/\bint\s*\[\s*\] \D+;$/, ],
    [/\bint\s*\[\s*\] \D+\s*=\s*new int\[\d+\];/, ],
    [/\bint\s\D+\s*=\D+\[\d+\];/, ],
    [],
    [],
    [],
    [],
    []
  ]);
  const cellBgColors = reactive(Array.from({ length: 5 }, () => Array(5).fill('white')));

  const cellData = reactive([
    [
      {
        dataStructure: 'array',
        operation: 'declare',
        bg: 'white',
        input: '',
        regex: /\bint\s*\[\s*\] \D+;$/,
        correctAnswer: 'int[] arr;'
      },
      {
        dataStructure: 'list',
        operation: 'declare',
        bg: 'white',
        input: '',
        regex: '',
        correctAnswer: 'List<Integer> myList;'
      },
      {
        dataStructure: 'stack',
        operation: 'declare',
        bg: 'white',
        input: '',
        regex: '',
        correctAnswer: 'Stack<Integer> myStack;'
      },
      {
        dataStructure: 'queue',
        operation: 'declare',
        bg: 'white',
        input: '',
        regex: '',
        correctAnswer: 'Queue<Integer> myQueue;'
      },
      {
        dataStructure: 'set',
        operation: 'declare',
        bg: 'white',
        input: '',
        regex: '',
        correctAnswer: 'Set<Integer> mySet;'
      },
      {
        dataStructure: 'map',
        operation: 'declare',
        bg: 'white',
        input: '',
        regex: '',
        correctAnswer: 'Map<Integer, String> myMap;'
      },
    ],
    [
      {
        dataStructure: 'array',
        operation: 'initialize',
        bg: 'white',
        input: '',
        regex: '',
        correctAnswer: 'arr = new int[5];'
      },
      {
        dataStructure: 'list',
        operation: 'initialize',
        bg: 'white',
        input: '',
        regex: '',
        correctAnswer: 'myList = new ArrayList<>();'
      },
      {
        dataStructure: 'stack',
        operation: 'initialize',
        bg: 'white',
        input: '',
        regex: '',
        // TODO: Use ArrayDeque instead
        correctAnswer: 'myStack = new Stack<>();'
      },
      {
        dataStructure: 'queue',
        operation: 'initialize',
        bg: 'white',
        input: '',
        regex: '',
        correctAnswer: 'myQueue = new LinkedList<>();'
      },
      {
        dataStructure: 'set',
        operation: 'initialize',
        bg: 'white',
        input: '',
        regex: '',
        correctAnswer: 'mySet = new HashSet<>();'
      },
      {
        dataStructure: 'map',
        operation: 'initialize',
        bg: 'white',
        input: '',
        regex: '',
        correctAnswer: 'myMap = new HashMap<>();'
      },
    ],
    [
      {
        dataStructure: 'array',
        operation: 'get',
        bg: 'white',
        input: '',
        regex: '',
        correctAnswer: 'int firstElement = arr[0];'
      },
      {
        dataStructure: 'list',
        operation: 'get',
        bg: 'white',
        input: '',
        regex: '',
        correctAnswer: 'Integer firstElement = myList.get(0);'
      },
      
      {
        dataStructure: 'stack',
        operation: 'get',
        bg: 'gray',
        input: null,
        regex: null,
        // correctAnswer: 'int element = myStack.get(0);'
        correctAnswer: null,
      },
      {
        dataStructure: 'queue',
        operation: 'get',
        bg: 'gray',
        input: null,
        regex: null,
        correctAnswer: null,
      },
      {
        dataStructure: 'set',
        operation: 'get',
        bg: 'gray',
        input: null,
        regex: null,
        correctAnswer: null,
      },
      {
        dataStructure: 'map',
        operation: 'get',
        bg: 'white',
        input: '',
        regex: '',
        correctAnswer: 'String value = myMap.get(42);'
      },
    ],
    [
      {
        dataStructure: 'array',
        operation: 'set',
        bg: 'white',
        input: '',
        regex: '',
        correctAnswer: 'arr[0] = 42;'
      },
      {
        dataStructure: 'list',
        operation: 'set',
        bg: 'white',
        input: '',
        regex: '',
        correctAnswer: 'myList.set(0, 42)'
      },
      {
        dataStructure: 'stack',
        operation: 'set',
        bg: 'gray',
        input: null,
        regex: null,
        correctAnswer: null,
      },
      {
        dataStructure: 'queue',
        operation: 'set',
        bg: 'gray',
        input: null,
        regex: null,
        correctAnswer: null,
      },
      {
        dataStructure: 'set',
        operation: 'set',
        bg: 'gray',
        input: null,
        regex: null,
        correctAnswer: null,
      },
      {
        dataStructure: 'map',
        operation: 'set',
        bg: 'white',
        input: '',
        regex: '',
        correctAnswer: 'myMap.put(42, "Ana");'
      },
    ],
    [
      {
        dataStructure: 'array',
        operation: 'iterate',
        bg: 'white',
        input: '',
        regex: '',
        correctAnswer: 'for(int i = 0; i < arr.length; i++){}'
      },
      {
        dataStructure: 'list',
        operation: 'iterate',
        bg: 'white',
        input: '',
        regex: '',
        correctAnswer: 'for(int i = 0; i < myList.size(); i++){};'
      },
      {
        dataStructure: 'stack',
        operation: 'iterate',
        bg: 'white',
        input: '',
        regex: '',
        correctAnswer: 'while(!myStack.isEmpty()){}'
      },
      {
        dataStructure: 'queue',
        operation: 'iterate',
        bg: 'white',
        input: '',
        regex: '',
        correctAnswer: 'while(!myQueue.isEmpty()){}'
      },
      {
        dataStructure: 'set',
        operation: 'iterate',
        bg: 'white',
        input: '',
        regex: '',
        correctAnswer: 'for(Integer eachElement : mySet){}'
      },
      {
        dataStructure: 'map',
        operation: 'iterate',
        bg: 'white',
        input: '',
        regex: '',
        correctAnswer: 'for(Integer eachKey : myMap.keySet()){}'
      },
    ],
    [
      {
        dataStructure: 'array',
        operation: 'add',
        bg: 'gray',
        input: null,
        regex: null,
        correctAnswer: null,
      },
      {
        dataStructure: 'list',
        operation: 'add',
        bg: 'white',
        input: '',
        regex: '',
        correctAnswer: 'myList.add(42);'
      },
      {
        dataStructure: 'stack',
        operation: 'add',
        bg: 'white',
        input: '',
        regex: '',
        correctAnswer: 'myStack.push(42);'
      },
      {
        dataStructure: 'queue',
        operation: 'add',
        bg: 'white',
        input: '',
        regex: '',
        correctAnswer: 'myQueue.offer(42);'
      },
      {
        dataStructure: 'set',
        operation: 'add',
        bg: 'white',
        input: '',
        regex: '',
        correctAnswer: 'mySet.add(42);',
      },
      {
        dataStructure: 'map',
        operation: 'add',
        bg: 'white',
        input: '',
        regex: '',
        correctAnswer: 'myMap.put(42, "Ana");'
      },
    ],
    [
      {
        dataStructure: 'array',
        operation: 'remove',
        bg: 'gray',
        input: null,
        regex: null,
        correctAnswer: null,
      },
      {
        dataStructure: 'list',
        operation: 'remove',
        bg: 'white',
        input: '',
        regex: '',
        correctAnswer: 'myList.remove(0);'
      },
      {
        dataStructure: 'stack',
        operation: 'remove',
        bg: 'white',
        input: '',
        regex: '',
        correctAnswer: 'Integer top = myStack.pop();'
      },
      {
        dataStructure: 'queue',
        operation: 'remove',
        bg: 'white',
        input: '',
        regex: '',
        correctAnswer: 'Integer front = myQueue.poll();'
      },
      {
        dataStructure: 'set',
        operation: 'remove',
        bg: 'white',
        input: '',
        regex: '',
        correctAnswer: 'mySet.remove(42)'
      },
      {
        dataStructure: 'map',
        operation: 'remove',
        bg: 'white',
        input: '',
        regex: '',
        correctAnswer: 'myMap.remove(42);'
      },
    ],
    [
      {
        dataStructure: 'array',
        operation: 'insert',
        bg: 'gray',
        input: null,
        regex: null,
        correctAnswer: null,
      },
      {
        dataStructure: 'list',
        operation: 'insert',
        bg: 'white',
        input: '',
        regex: '',
        correctAnswer: 'myList.add(0, 42);'
      },
      {
        dataStructure: 'stack',
        operation: 'insert',
        bg: 'gray',
        input: null,
        regex: null,
        correctAnswer: null,
      },
      {
        dataStructure: 'queue',
        operation: 'insert',
        bg: 'gray',
        input: null,
        regex: null,
        correctAnswer: null,
      },
      {
        dataStructure: 'set',
        operation: 'insert',
        bg: 'gray',
        input: null,
        regex: null,
        correctAnswer: null,
      },
      {
        dataStructure: 'map',
        operation: 'insert',
        bg: 'gray',
        input: null,
        regex: null,
        correctAnswer: null,
      },
    ],
  ]);

  /*
   * Getters
   */
  const formattedDataStructures = computed(() => {
    return dataStructures.map((eachDataStructure) => {

      if(eachDataStructure === 'array'){
        return `int[]`;
      } else if(eachDataStructure === 'map'){
        return `${capitalizeFirst(eachDataStructure)}<Integer, String>`;
      }
  
      return `${capitalizeFirst(eachDataStructure)}<Integer>`
    });
  });

  const formattedOperations = computed(() => {
    return operations.map((eachOperation) => {
      return `${capitalizeFirst(eachOperation)}`;
    });
  });

  /*
   * Actions
   */
  function checkCells() {

    for(let i = 0; i < cellData.length; i++) {

      for(let k = 0; k < cellData[i].length; k++){
        const eachCell = cellData[i][k];

        if(eachCell?.regex && eachCell?.input){

          const isCorrect = eachCell.regex.test(eachCell.input);
          cellData[i][k].bg = isCorrect ? 'aqua' : 'red';
        }
      }
    }
  }

  function resetCells(){

    const isClear = window.confirm("Clear all entries as well?")

    const clearFn = isClear 
      ? (cell) => {
        cell.bg = cell.correctAnswer ? 'white' : 'gray'
        cell.input = '';
      }
      : (cell) => cell.bg = cell.correctAnswer ? 'white' : 'gray';

    for(const eachOperationArr of cellData){
      for(const eachCell of eachOperationArr){
        clearFn(eachCell);
      }
    }
  }

  return {
    dataStructures, operations, cellData,
    formattedDataStructures, formattedOperations,
    checkCells, resetCells,
  };
});