import { test, /*describe, before, after, afterEach, beforeEach*/ } from 'tezt'
import { hList, andList, orList } from './lib'
import expect from "expect"

const list = ["apples", "oranges", "bananas"]
test("it works", () => {
  expect(hList(list, "hello")).toBe("apples, oranges, hello bananas")
  expect(andList(list)).toBe("apples, oranges, and bananas")
  expect(orList(list)).toBe("apples, oranges, or bananas")
  
  expect(andList(list, true)).toBe("apples, oranges, and bananas")
  expect(orList(list, true)).toBe("apples, oranges, or bananas")

  expect(andList(list.slice(0,2))).toBe("apples and oranges")
  expect(andList(list.slice(0,1))).toBe("apples")
})