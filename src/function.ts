function sum(a: number, b: number): number {
    return a + b;
}

console.log(sum(5, 6));

type Bio = {
    name: string,
    age: number,
    address: string,
}

function bio(name: string, age: number, address: string): Bio {
    return {
        name, age, address
    }
}

console.log(bio('awan', 17, 'Tasikmalaya'));

interface Profile {
    username: string,
    is_active: boolean
}

function profile(profile: Profile): Profile {
    return profile;
}

console.log(profile({ username: 'awan', is_active: true }));

// Contoh partial
const partialProfile: Partial<Profile> = {
    is_active: false,
}

console.log(partialProfile);

const printText = (): string => 'hello';
console.log(printText());


