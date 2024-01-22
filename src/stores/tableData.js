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
  const cellBgColors = reactive(Array.from({ length: 5 }, () => Array(5).fill(null)));

  const cellData = reactive([
    [
      {
        dataStructure: 'array',
        operation: 'declare',
        bg: null,
        input: '',
        regex: /\bint\s*\[\s*\]\s*[a-z]\D*\s*;$/,
        correctAnswer: 'int[] arr;'
      },
      {
        dataStructure: 'list',
        operation: 'declare',
        bg: null,
        input: '',
        regex: /\bList<Integer>\s+[a-z]\D*\s*;$/,
        correctAnswer: 'List<Integer> myList;'
      },
      {
        dataStructure: 'stack',
        operation: 'declare',
        bg: null,
        input: '',
        regex: /\bStack<Integer>\s+[a-z]\D*\s*;$/,
        correctAnswer: 'Stack<Integer> myStack;'
      },
      {
        dataStructure: 'queue',
        operation: 'declare',
        bg: null,
        input: '',
        regex: /\Queue<Integer>\s+[a-z]\D*\s*;$/,
        correctAnswer: 'Queue<Integer> myQueue;'
      },
      {
        dataStructure: 'set',
        operation: 'declare',
        bg: null,
        input: '',
        regex: /\bSet<Integer>\s+[a-z]\D*\s*;$/,
        correctAnswer: 'Set<Integer> mySet;'
      },
      {
        dataStructure: 'map',
        operation: 'declare',
        bg: null,
        input: '',
        regex: /\bMap<Integer\s*,\s*String>\s+[a-z]\D*\s*;$/,
        correctAnswer: 'Map<Integer, String> myMap;'
      },
    ],
    [
      {
        dataStructure: 'array',
        operation: 'initialize',
        bg: null,
        input: '',
        regex: /\b[a-z]\D*\s*=\s*new\s+int\[\d+\]\s*;$/,
        correctAnswer: 'arr = new int[5];'
      },
      {
        dataStructure: 'list',
        operation: 'initialize',
        bg: null,
        input: '',
        regex: /\b[a-z]\D*\s*=\s*new\s+ArrayList<(\s*|Integer)>\(\)\s*;$/,
        correctAnswer: 'myList = new ArrayList<>();'
      },
      {
        dataStructure: 'stack',
        operation: 'initialize',
        bg: null,
        input: '',
        regex: /\b[a-z]\D*\s*=\s*new\s+Stack<(\s*|Integer)>\(\)\s*;$/,
        // TODO: Use ArrayDeque instead
        correctAnswer: 'myStack = new Stack<>();'
      },
      {
        dataStructure: 'queue',
        operation: 'initialize',
        bg: null,
        input: '',
        regex: /\b[a-z]\D*\s*=\s*new\s+LinkedList<(\s*|Integer)>\(\)\s*;$/,
        correctAnswer: 'myQueue = new LinkedList<>();'
      },
      {
        dataStructure: 'set',
        operation: 'initialize',
        bg: null,
        input: '',
        regex: /\b[a-z]\D*\s*=\s*new\s+HashSet<(\s*|Integer)>\(\)\s*;$/,
        correctAnswer: 'mySet = new HashSet<>();'
      },
      {
        dataStructure: 'map',
        operation: 'initialize',
        bg: null,
        input: '',
        regex: /\b[a-z]\D*\s*=\s*new\s+HashMap<(\s*|Integer,\s*String)>\(\)\s*;$/,
        correctAnswer: 'myMap = new HashMap<>();'
      },
    ],
    [
      {
        dataStructure: 'array',
        operation: 'get',
        bg: null,
        input: '',
        regex: /\b(int|Integer)\s+[a-z]\D*\s*=\s*[a-z]\D*\s*\[\d+\]\s*;$/,
        correctAnswer: 'int firstElement = arr[0];'
      },
      {
        dataStructure: 'list',
        operation: 'get',
        bg: null,
        input: '',
        regex: /\b(int|Integer)\s+[a-z]\D*\s*=\s*[a-z]\D*\.get\(\d+\)\s*;$/,
        correctAnswer: 'Integer firstElement = myList.get(0);'
      },
      
      {
        dataStructure: 'stack',
        operation: 'get',
        bg: 'black',
        input: null,
        regex: null,
        // correctAnswer: 'int element = myStack.get(0);'
        correctAnswer: null,
      },
      {
        dataStructure: 'queue',
        operation: 'get',
        bg: 'black',
        input: null,
        regex: null,
        correctAnswer: null,
      },
      {
        dataStructure: 'set',
        operation: 'get',
        bg: 'black',
        input: null,
        regex: null,
        correctAnswer: null,
      },
      {
        dataStructure: 'map',
        operation: 'get',
        bg: null,
        input: '',
        regex: /\bString\s+[a-z]\D*\s*=\s*[a-z]\D*\.get\(\d+\)\s*;$/,
        correctAnswer: 'String value = myMap.get(42);'
      },
    ],
    [
      {
        dataStructure: 'array',
        operation: 'set',
        bg: null,
        input: '',
        regex: /\b[a-z]\D*\s*\[\d+\]\s*=\s*\d+;$/,
        correctAnswer: 'arr[0] = 42;'
      },
      {
        dataStructure: 'list',
        operation: 'set',
        bg: null,
        input: '',
        regex: /\b[a-z]\D*\.set\(\s*\d+\s*,\s*\d+\s*\)\s*;$/,
        correctAnswer: 'myList.set(0, 42);'
      },
      {
        dataStructure: 'stack',
        operation: 'set',
        bg: 'black',
        input: null,
        regex: null,
        correctAnswer: null,
      },
      {
        dataStructure: 'queue',
        operation: 'set',
        bg: 'black',
        input: null,
        regex: null,
        correctAnswer: null,
      },
      {
        dataStructure: 'set',
        operation: 'set',
        bg: 'black',
        input: null,
        regex: null,
        correctAnswer: null,
      },
      {
        dataStructure: 'map',
        operation: 'set',
        bg: null,
        input: '',
        regex: /\b[a-z]\D*\.put\(\d+\s*,\s*\".*\"\)\s*;$/,
        correctAnswer: 'myMap.put(42, "Ana");'
      },
    ],
    [
      {
        dataStructure: 'array',
        operation: 'iterate',
        bg: null,
        input: '',
        regex: /\bfor\s*\(\s*int\s+(\w+)\s*=\s*\d+\s*;\s*\1\s*<\s*[a-z]\D*\.length\s*;\s*\1\+\+\s*\)\s*{\s*}$/,
        correctAnswer: 'for(int i = 0; i < arr.length; i++){}'
      },
      {
        dataStructure: 'list',
        operation: 'iterate',
        bg: null,
        input: '',
        regex: /\bfor\s*\(\s*int\s+(\w+)\s*=\s*\d+\s*;\s*\1\s*<\s*[a-z]\D*\.size\(\)\s*;\s*\1\+\+\s*\)\s*{\s*}$/,
        correctAnswer: 'for(int i = 0; i < myList.size(); i++){}'
      },
      {
        dataStructure: 'stack',
        operation: 'iterate',
        bg: null,
        input: '',
        regex: /\bwhile\s*\(\s*!\s*[a-z]\D*\.isEmpty\s*\(\s*\)\s*\)\s*{\s*}$/,
        correctAnswer: 'while(!myStack.isEmpty()){}'
      },
      {
        dataStructure: 'queue',
        operation: 'iterate',
        bg: null,
        input: '',
        regex: /\bwhile\s*\(\s*!\s*[a-z]\D*\.isEmpty\s*\(\s*\)\s*\)\s*{\s*}$/,
        correctAnswer: 'while(!myQueue.isEmpty()){}'
      },
      {
        dataStructure: 'set',
        operation: 'iterate',
        bg: null,
        input: '',
        regex: /\bfor\s*\(\s*(int|Integer)\s+[a-z]\D*\s*:\s*[a-z]\D*\s*\)\s*{\s*}$/,
        correctAnswer: 'for(Integer eachElement : mySet){}'
      },
      {
        dataStructure: 'map',
        operation: 'iterate',
        bg: null,
        input: '',
        regex: /\bfor\s*\(\s*(int|Integer)\s+[a-z]\D*\s*:\s*[a-z]\D*\.keySet\(\)\s*\)\s*{\s*}$/,
        correctAnswer: 'for(Integer eachKey : myMap.keySet()){}'
      },
    ],
    [
      {
        dataStructure: 'array',
        operation: 'add',
        bg: 'black',
        input: null,
        regex: null,
        correctAnswer: null,
      },
      {
        dataStructure: 'list',
        operation: 'add',
        bg: null,
        input: '',
        regex: /\b[a-z]\D*\.add\(\s*\d+\s*\)\s*;$/,
        correctAnswer: 'myList.add(42);'
      },
      {
        dataStructure: 'stack',
        operation: 'add',
        bg: null,
        input: '',
        regex: /\b[a-z]\D*\.push\(\s*\d+\s*\)\s*;$/,
        correctAnswer: 'myStack.push(42);'
      },
      {
        dataStructure: 'queue',
        operation: 'add',
        bg: null,
        input: '',
        regex: /\b[a-z]\D*\.offer\(\s*\d+\s*\)\s*;$/,
        correctAnswer: 'myQueue.offer(42);'
      },
      {
        dataStructure: 'set',
        operation: 'add',
        bg: null,
        input: '',
        regex: /\b[a-z]\D*\.add\(\s*\d+\s*\)\s*;$/,
        correctAnswer: 'mySet.add(42);',
      },
      {
        dataStructure: 'map',
        operation: 'add',
        bg: null,
        input: '',
        regex: /\b[a-z]\D*\.put\(\s*\d+\s*,\s*\".*\"\s*\)\s*;$/,
        correctAnswer: 'myMap.put(42, "Ana");'
      },
    ],
    [
      {
        dataStructure: 'array',
        operation: 'remove',
        bg: 'black',
        input: null,
        regex: null,
        correctAnswer: null,
      },
      {
        dataStructure: 'list',
        operation: 'remove',
        bg: null,
        input: '',
        regex: /\b[a-z]\D*\.remove\(\s*\d+\s*\)\s*;$/,
        correctAnswer: 'myList.remove(0);'
      },
      {
        dataStructure: 'stack',
        operation: 'remove',
        bg: null,
        input: '',
        regex: /\b[a-z]\D*\.pop\(\s*\)\s*;$/,
        correctAnswer: 'myStack.pop();'
      },
      {
        dataStructure: 'queue',
        operation: 'remove',
        bg: null,
        input: '',
        regex: /\b[a-z]\D*\.poll\(\s*\)\s*;$/,
        correctAnswer: 'myQueue.poll();'
      },
      {
        dataStructure: 'set',
        operation: 'remove',
        bg: null,
        input: '',
        regex: /\b[a-z]\D*\.remove\(\s*\d+\s*\)\s*;$/,
        correctAnswer: 'mySet.remove(42);'
      },
      {
        dataStructure: 'map',
        operation: 'remove',
        bg: null,
        input: '',
        regex: /\b[a-z]\D*\.remove\(\s*\d+\s*\)\s*;$/,
        correctAnswer: 'myMap.remove(42);'
      },
    ],
    [
      {
        dataStructure: 'array',
        operation: 'insert',
        bg: 'black',
        input: null,
        regex: null,
        correctAnswer: null,
      },
      {
        dataStructure: 'list',
        operation: 'insert',
        bg: null,
        input: '',
        regex: /\b[a-z]\D*\.add\(\s*\d+\s*,\s*\d+\s*\)\s*;$/,
        correctAnswer: 'myList.add(0, 42);'
      },
      {
        dataStructure: 'stack',
        operation: 'insert',
        bg: 'black',
        input: null,
        regex: null,
        correctAnswer: null,
      },
      {
        dataStructure: 'queue',
        operation: 'insert',
        bg: 'black',
        input: null,
        regex: null,
        correctAnswer: null,
      },
      {
        dataStructure: 'set',
        operation: 'insert',
        bg: 'black',
        input: null,
        regex: null,
        correctAnswer: null,
      },
      {
        dataStructure: 'map',
        operation: 'insert',
        bg: 'black',
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

    const checkFn = (cell) => {

      if(cell?.regex && cell?.input){

        try {
          const isCorrect = cell.regex.test(cell.input);
          cell.bg = isCorrect ? '#00ADB5' : '#ff0033';
        } catch(err){
          console.error(`ERROR: ${err}`, cell);
        }
      }
    }

    for(const eachOperationArr of cellData){
      for(const eachCell of eachOperationArr){
        checkFn(eachCell);
      }
    }
  }

  function resetCells(){

    const isClear = window.confirm("Clear all entries as well?")

    const clearFn = isClear 
      ? (cell) => {
        cell.bg = cell.correctAnswer ? null : 'black'
        cell.input = '';
      }
      : (cell) => cell.bg = cell.correctAnswer ? null : 'black';

    for(const eachOperationArr of cellData){
      for(const eachCell of eachOperationArr){
        clearFn(eachCell);
      }
    }
  }

  function showAnswers(){
    console.log('showing answers');

    const showFn = (cell) => {
      if(cell.correctAnswer){
        cell.input = cell.correctAnswer;
      }
    };

    for(const eachOperationArr of cellData){
      for(const eachCell of eachOperationArr){
        showFn(eachCell);
      }
    }
  }

  return {
    dataStructures, operations, cellData,
    formattedDataStructures, formattedOperations,
    checkCells, resetCells, showAnswers,
  };
});