
const tareas = require("../tareas");
const assert = require('chai').assert;

const t1 = { text: "t1", done: true, tags: ["a1", "a2", "a3"] };
const t2 = { text: "t2", tags: ["a1", "a3"] };
const t3 = { text: "t3", done: false, tags: [] };
const t4 = { text: "t4", tags: ["a2", "a3"] };
const t5 = { text: "t5", done: true, tags: ["a5"] };

let list = [t1, t2, t3, t4];

describe("getToDoTasks", () => {
    it("Aplicado a la lista vacía", () => {
        assert.deepEqual(tareas.getToDoTasks([]), []);
    }),

    it("Tarea con done: true", () => {
        assert.deepEqual(tareas.getToDoTasks([t1]), []);
    });

    it("Tarea con done: false", () => {
        assert.deepEqual(tareas.getToDoTasks([t3]), ["t3"]);
    });
});

describe("findByTag", () => {
    it("Aplicado a la lista vacía", () => {
        assert.deepEqual(tareas.findByTag([], "a1"), []);
    });
    
    it("Con el tag 'a1'", () => {
        assert.deepEqual(tareas.findByTag(list, "a1"), [t1, t2]);
    });

    it("Con el tag 'a2'", () => {
        assert.deepEqual(tareas.findByTag(list, "a2"), [t1, t4]);
    });

    it("Con el tag 'a3'", () => {
        assert.deepEqual(tareas.findByTag(list, "a3"), [t1, t2, t4]);
    });

    it("Con el tag 'a4'", () => {
        assert.deepEqual(tareas.findByTag(list, "a4"), []);
    });

    it("Con el tag vacío", () => {
        assert.deepEqual(tareas.findByTag(list, ""), []);
    });
});

describe("countDone", () => {
    it("Aplicado a la lista vacía", () => {
        assert.strictEqual(tareas.countDone([]), 0);
    });

    it("Aplicado a un elemento con done: true", () => {
        assert.strictEqual(tareas.countDone([t1]), 1);
    });

    it("Aplicado a un elemento con done: false", () => {
        assert.strictEqual(tareas.countDone([t3]), 0);
    });

    it("Mezcla de elementos", () => {
        assert.strictEqual(tareas.countDone([t1, t2, t3]), 1);
    });

    it("Mezcla de elementos y dos finalizadas", () => {
        assert.strictEqual(tareas.countDone([t1, t2, t3, t4, t5]), 2);
    });

    it("Todas finalizadas", () => {
        assert.strictEqual(tareas.countDone([t1, t5]), 2);        
    });

});