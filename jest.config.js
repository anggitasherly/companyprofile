const nextJest = require("next/jest")({
  dir: "./",
});

const createJestConfig = nextJest;

const customJestConfig = {
  testEnvironment: "node",
};

module.exports = createJestConfig(customJestConfig);

/*
root project ada di folder ini" (folder tempat jest.config.js ini berada). 
Dengan info itu, next/jest otomatis baca jsconfig.json kamu, 
nemu alias @/ yang udah dikonfigurasi di situ 
(yang sebelumnya dipake Next.js buat import "@/lib/db" dkk), 
terus otomatis bikinin moduleNameMapper yang sesuai buat Jest — kamu gak perlu nulis manual.
*/