# human-list

array => human readable list

`hList(["apples", "oranges", "bananas"], "and") => "apples, oranges, and bananas"`

automatically inserts commas, conjunctions in correct places no matter the length of the list

### installation

`yarn add human-list`

`npm i -S human-list`

### Usage

`hList(array, conjunction) => human readable list`

(a conjunction is a joining word like "and" or "or")

`andList` is syntactic sugar for hList([array], "and")
`orList` is syntactic sugar for hList([array], "or")

```ts
import { hList, andList, orList } from 'human-list'

const list = ["apples", "oranges", "bananas"]


hList(list, "and") // => "apples, oranges, and bananas"
hList(list.slice(0, 2), "and") // => "apples and oranges"
hList(list.slice(0, 1), "and") // => "apples"

andList(list) // => "apples, oranges, and bananas"

orList(list) // => "apples, oranges, or bananas"
```# human-list
