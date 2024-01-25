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
    [/^int\s*\[\s*\] \D+;$/, ],
    [/^int\s*\[\s*\] \D+\s*=\s*new int\[\d+\];/, ],
    [/^int\s\D+\s*=\D+\[\d+\];/, ],
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
        regex: /^int\s*\[\s*\]\s+[a-z][a-zA-Z]*\s*;$/,
        correctAnswer: 'int[] arr;'
      },
      {
        dataStructure: 'list',
        operation: 'declare',
        bg: null,
        input: '',
        regex: /^List<Integer>\s+[a-z][a-zA-Z]*\s*;$/,
        correctAnswer: 'List<Integer> myList;'
      },
      {
        dataStructure: 'stack',
        operation: 'declare',
        bg: null,
        input: '',
        regex: /^Stack<Integer>\s+[a-z][a-zA-Z]*\s*;$/,
        correctAnswer: 'Stack<Integer> myStack;'
      },
      {
        dataStructure: 'queue',
        operation: 'declare',
        bg: null,
        input: '',
        regex: /\Queue<Integer>\s+[a-z][a-zA-Z]*\s*;$/,
        correctAnswer: 'Queue<Integer> myQueue;'
      },
      {
        dataStructure: 'set',
        operation: 'declare',
        bg: null,
        input: '',
        regex: /^Set<Integer>\s+[a-z][a-zA-Z]*\s*;$/,
        correctAnswer: 'Set<Integer> mySet;'
      },
      {
        dataStructure: 'map',
        operation: 'declare',
        bg: null,
        input: '',
        regex: /^Map<Integer\s*,\s*String>\s+[a-z][a-zA-Z]*\s*;$/,
        correctAnswer: 'Map<Integer, String> myMap;'
      },
    ],
    [
      {
        dataStructure: 'array',
        operation: 'initialize',
        bg: null,
        input: '',
        regex: [
          /^[a-z][a-zA-Z]*\s*=\s*new\s+int\[\d+\]\s*;$/,
          /^(int|Integer)\s*\[\]\s+[a-z][a-zA-Z]*\s*=\s*new\s+int\[\d+\]\s*;$/,
        ],
        correctAnswer: [
          'arr = new int[5];',
          'int[] arr = new int[5];'
        ],
      },
      {
        dataStructure: 'list',
        operation: 'initialize',
        bg: null,
        input: '',
        regex: [
          /^[a-z][a-zA-Z]*\s*=\s*new\s+ArrayList<(\s*|Integer)>\(\)\s*;$/,
          /^List<Integer>\s+[a-z][a-zA-Z]*\s*=\s*new\s+ArrayList<(\s*|Integer)>\(\)\s*;$/,
        ],
        correctAnswer: [
          'myList = new ArrayList<>();',
          'List<Integer> myList = new ArrayList<>();',
        ],
      },
      {
        dataStructure: 'stack',
        operation: 'initialize',
        bg: null,
        input: '',
        regex: [
          /^[a-z][a-zA-Z]*\s*=\s*new\s+Stack<(\s*|Integer)>\(\)\s*;$/,
          /^Stack<Integer>\s+[a-z][a-zA-Z]*\s*=\s*new\s+Stack<(\s*|Integer)>\(\)\s*;$/,
        ],
        // TODO: Use ArrayDeque instead
        correctAnswer: [
          'myStack = new Stack<>();',
          'Stack<Integer> myStack = new Stack<>();',
        ]
      },
      {
        dataStructure: 'queue',
        operation: 'initialize',
        bg: null,
        input: '',
        regex: [
          /^[a-z][a-zA-Z]*\s*=\s*new\s+LinkedList<(\s*|Integer)>\(\)\s*;$/,
          /^Queue<Integer>\s+[a-z][a-zA-Z]*\s*=\s*new\s+LinkedList<(\s*|Integer)>\(\)\s*;$/,
        ],
        correctAnswer: [
          'myQueue = new LinkedList<>();',
          'Queue<Integer> myQueue = new LinkedList<>();',
        ]
      },
      {
        dataStructure: 'set',
        operation: 'initialize',
        bg: null,
        input: '',
        regex: [
          /^[a-z][a-zA-Z]*\s*=\s*new\s+HashSet<(\s*|Integer)>\(\)\s*;$/,
          /^Set<Integer>\s+[a-z][a-zA-Z]*\s*=\s*new\s+HashSet<(\s*|Integer)>\(\)\s*;$/,
        ],
        correctAnswer: [
          'mySet = new HashSet<>();',
          'Set<Integer> mySet = new HashSet<>();',
        ]
      },
      {
        dataStructure: 'map',
        operation: 'initialize',
        bg: null,
        input: '',
        regex: [
          /^[a-z][a-zA-Z]*\s*=\s*new\s+HashMap<(\s*|Integer,\s*String)>\(\)\s*;$/,
          /^Map<Integer,\s*String>\s+[a-z][a-zA-Z]*\s*=\s*new\s+HashMap<(\s*|Integer,\s*String)>\(\)\s*;$/,
        ],
        correctAnswer: [
          'myMap = new HashMap<>();',
          'Map<Integer, String> myMap = new HashMap<>();',
        ]
      },
    ],
    [
      {
        dataStructure: 'array',
        operation: 'get',
        bg: null,
        input: '',
        regex: /^(int|Integer)\s+[a-z][a-zA-Z]*\s*=\s*[a-z][a-zA-Z]*\s*\[\d+\]\s*;$/,
        correctAnswer: 'int firstElement = arr[0];'
      },
      {
        dataStructure: 'list',
        operation: 'get',
        bg: null,
        input: '',
        regex: /^(int|Integer)\s+[a-z][a-zA-Z]*\s*=\s*[a-z][a-zA-Z]*\.get\(\d+\)\s*;$/,
        correctAnswer: 'Integer firstElement = myList.get(0);'
      },
      
      {
        dataStructure: 'stack',
        operation: 'get',
        bg: 'black',
        input: null,
        regex: null,
        // Omit this because getting from the middle of the stack is not good IMO
        // Plus, ArrayDeque is often a better choice than the Stack class anyway...
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
        regex: /^String\s+[a-z][a-zA-Z]*\s*=\s*[a-z][a-zA-Z]*\.get\(\d+\)\s*;$/,
        correctAnswer: 'String value = myMap.get(42);'
      },
    ],
    [
      {
        dataStructure: 'array',
        operation: 'set',
        bg: null,
        input: '',
        regex: /^[a-z][a-zA-Z]*\s*\[\d+\]\s*=\s*\d+;$/,
        correctAnswer: 'arr[0] = 42;'
      },
      {
        dataStructure: 'list',
        operation: 'set',
        bg: null,
        input: '',
        regex: /^[a-z][a-zA-Z]*\.set\(\s*\d+\s*,\s*\d+\s*\)\s*;$/,
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
        regex: /^[a-z][a-zA-Z]*\.put\(\d+\s*,\s*\".*\"\)\s*;$/,
        correctAnswer: 'myMap.put(42, "Ana");'
      },
    ],
    [
      {
        dataStructure: 'array',
        operation: 'iterate',
        bg: null,
        input: '',
        regex: [
          /^for\s*\(\s*int\s+(\w+)\s*=\s*\d+\s*;\s*\1\s*<\s*[a-z][a-zA-Z]*\.length\s*;\s*\1\+\+\s*\)\s*{\s*}$/,
          /^for\s*\(\s*(int|Integer)\s+[a-z][a-zA-Z]*\s*:\s*[a-z][a-zA-Z]*\s*\)\s*{\s*}$/,
        ],
        correctAnswer: [
          'for(int i = 0; i < arr.length; i++){}',
          'for(int eachElement : arr){}'
        ]
      },
      {
        dataStructure: 'list',
        operation: 'iterate',
        bg: null,
        input: '',
        regex: [
          /^for\s*\(\s*int\s+(\w+)\s*=\s*\d+\s*;\s*\1\s*<\s*[a-z][a-zA-Z]*\.size\(\)\s*;\s*\1\+\+\s*\)\s*{\s*}$/,
          /^for\s*\(\s*(int|Integer)\s+[a-z][a-zA-Z]*\s*:\s*[a-z][a-zA-Z]*\s*\)\s*{\s*}$/,
        ],
        correctAnswer: [
          'for(int i = 0; i < myList.size(); i++){}',
          'for(int eachElement : arr){}'
        ]
      },
      {
        dataStructure: 'stack',
        operation: 'iterate',
        bg: null,
        input: '',
        regex: /^while\s*\(\s*!\s*[a-z][a-zA-Z]*\.isEmpty\s*\(\s*\)\s*\)\s*{\s*}$/,
        correctAnswer: 'while(!myStack.isEmpty()){}'
      },
      {
        dataStructure: 'queue',
        operation: 'iterate',
        bg: null,
        input: '',
        regex: /^while\s*\(\s*!\s*[a-z][a-zA-Z]*\.isEmpty\s*\(\s*\)\s*\)\s*{\s*}$/,
        correctAnswer: 'while(!myQueue.isEmpty()){}'
      },
      {
        dataStructure: 'set',
        operation: 'iterate',
        bg: null,
        input: '',
        regex: /^for\s*\(\s*(int|Integer)\s+[a-z][a-zA-Z]*\s*:\s*[a-z][a-zA-Z]*\s*\)\s*{\s*}$/,
        correctAnswer: 'for(Integer eachElement : mySet){}'
      },
      {
        dataStructure: 'map',
        operation: 'iterate',
        bg: null,
        input: '',
        regex: /^for\s*\(\s*(int|Integer)\s+[a-z][a-zA-Z]*\s*:\s*[a-z][a-zA-Z]*\.keySet\(\)\s*\)\s*{\s*}$/,
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
        regex: /^[a-z][a-zA-Z]*\.add\(\s*\d+\s*\)\s*;$/,
        correctAnswer: 'myList.add(42);'
      },
      {
        dataStructure: 'stack',
        operation: 'add',
        bg: null,
        input: '',
        regex: /^[a-z][a-zA-Z]*\.push\(\s*\d+\s*\)\s*;$/,
        correctAnswer: 'myStack.push(42);'
      },
      {
        dataStructure: 'queue',
        operation: 'add',
        bg: null,
        input: '',
        regex: /^[a-z][a-zA-Z]*\.offer\(\s*\d+\s*\)\s*;$/,
        correctAnswer: 'myQueue.offer(42);'
      },
      {
        dataStructure: 'set',
        operation: 'add',
        bg: null,
        input: '',
        regex: /^[a-z][a-zA-Z]*\.add\(\s*\d+\s*\)\s*;$/,
        correctAnswer: 'mySet.add(42);',
      },
      {
        dataStructure: 'map',
        operation: 'add',
        bg: null,
        input: '',
        regex: /^[a-z][a-zA-Z]*\.put\(\s*\d+\s*,\s*\".*\"\s*\)\s*;$/,
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
        regex: /^[a-z][a-zA-Z]*\.remove\(\s*\d+\s*\)\s*;$/,
        correctAnswer: 'myList.remove(0);'
      },
      {
        dataStructure: 'stack',
        operation: 'remove',
        bg: null,
        input: '',
        regex: /^[a-z][a-zA-Z]*\.pop\(\s*\)\s*;$/,
        correctAnswer: 'myStack.pop();'
      },
      {
        dataStructure: 'queue',
        operation: 'remove',
        bg: null,
        input: '',
        regex: /^[a-z][a-zA-Z]*\.poll\(\s*\)\s*;$/,
        correctAnswer: 'myQueue.poll();'
      },
      {
        dataStructure: 'set',
        operation: 'remove',
        bg: null,
        input: '',
        regex: /^[a-z][a-zA-Z]*\.remove\(\s*\d+\s*\)\s*;$/,
        correctAnswer: 'mySet.remove(42);'
      },
      {
        dataStructure: 'map',
        operation: 'remove',
        bg: null,
        input: '',
        regex: /^[a-z][a-zA-Z]*\.remove\(\s*\d+\s*\)\s*;$/,
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
        regex: /^[a-z][a-zA-Z]*\.add\(\s*\d+\s*,\s*\d+\s*\)\s*;$/,
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
        return `int array`;
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

    const checkRegex = (cell) => {
      if(!Array.isArray(cell.regex)){
        return cell.regex.test(cell.input);
      }

      for(const eachRegex of cell.regex){
        if(eachRegex.test(cell.input)){
          return true;
        }
      }
      return false;
    }

    const checkFn = (cell) => {

      if(cell?.regex && cell?.input){

        try {
          const isCorrect = checkRegex(cell);
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
        cell.input = Array.isArray(cell.correctAnswer) ? cell.correctAnswer[0] : cell.correctAnswer;
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