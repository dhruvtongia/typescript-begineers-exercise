import { expect, it } from "vitest";

// Index Signatures
// Sometimes you don’t know all the names of a type’s properties ahead of time, but you do know the shape of the values.

// In those cases you can use an index signature to describe the types of possible values
const createCache = () => {
  const cache: {
    [id: string]: string;
  } = {};

  const add = (id: string, value: string) => {
    cache[id] = value;
  };

  const remove = (id: string) => {
    delete cache[id];
  };

  return {
    cache,
    add,
    remove,
  };
};

it("Should add values to the cache", () => {
  const cache = createCache();

  cache.add("123", "Matt");

  expect(cache.cache["123"]).toEqual("Matt");
});

it("Should remove values from the cache", () => {
  const cache = createCache();

  cache.add("123", "Matt");
  cache.remove("123");

  expect(cache.cache["123"]).toEqual(undefined);
});
