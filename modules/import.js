// import a file
import 'underscore'

//named imports
import {sumTwo, sumThree} from 'math/addition'

//rename the named imports
import {
  sumTwo as addTwoNumbers,
  sumThree as sumThreeNumbers
} from 'math/addition'

//import all the things
import * as util from 'math/addition'

//import a list of values from a moudle
import * as additionUtil from 'math/addition'
const {sumTwo,sumThree}  = additionUtil

