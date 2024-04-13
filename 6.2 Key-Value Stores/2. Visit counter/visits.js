const getCount = async () => {
  const kv = await Deno.openKv();
  const store = await kv.get(["visits"]);
  return store?.value ?? 0;
};

const incrementCount = async () => {
  const kv = await Deno.openKv();
  const count = await getCount();
  await kv.set(["visits"], count + 1);
};

export { getCount, incrementCount };