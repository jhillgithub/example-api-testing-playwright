import { test, expect } from "@playwright/test";
const USER = "typicode";

test("should contain a profile", async ({ request }) => {
  const profile = await request.get(`/profile`);
  expect(profile.ok()).toBeTruthy();
  console.log(await profile.json());
  expect(await profile.json()).toEqual(
    expect.objectContaining({
      name: USER,
    })
  );
});

test("should get one post", async ({ request }) => {
  const posts = await request.get(`/posts/1`);
  expect(posts.ok()).toBeTruthy();
  expect(await posts.json()).toEqual(
    expect.objectContaining({ id: "1", title: "a title", views: 100 })
  );
});
