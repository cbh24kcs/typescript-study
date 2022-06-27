export default {};

interface Person {
    // 只读属性 readonly
    // 注意，只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候
    readonly name: string;
    age: number;
    gender?: string;
    // 任意属性
    // 一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集
    [propName: string]: any;
}

// 赋值的时候，变量的形状必须和接口的形状保持一致
let tom: Person = {
    name: 'Tom',
    age: 25,
    gender: 'male'
};

tom.name = '张三'

let tom2: Person = {
    name: 'Tom2',
    age: 25,
}



