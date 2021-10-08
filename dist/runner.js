"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
if (process.cwd().split('/').pop() !== 'dist') {
    process.chdir('dist');
}
const fs = __importStar(require("fs"));
const NS_PER_SEC = 1e9;
(async () => {
    var _a, _b, _c;
    let challenges = 0;
    const folders = fs.readdirSync('./challenges');
    for (const folder of folders) {
        const answer = (_a = (await Promise.resolve().then(() => __importStar(require(`./challenges/${folder}/answer.js`))))) === null || _a === void 0 ? void 0 : _a.default;
        if (answer && typeof answer === 'function') {
            challenges++;
            console.log(`Running challenge ${folder}`);
            const input = (_b = (await Promise.resolve().then(() => __importStar(require(`./challenges/${folder}/input.js`))))) === null || _b === void 0 ? void 0 : _b.default;
            const output = (_c = (await Promise.resolve().then(() => __importStar(require(`./challenges/${folder}/output.js`))))) === null || _c === void 0 ? void 0 : _c.default;
            try {
                const time = process.hrtime();
                const result = answer.apply(null, [input]);
                const diff = process.hrtime(time);
                if (deepEqual(output, result) === true) {
                    console.log(`🎉 Congrats! Challenge ${folder} completed! 🎉`);
                    console.log(`⌛ Time (machine dependant): ${diff[0] * NS_PER_SEC + diff[1]}ns`);
                    console.log(`🏅 Number of chars (after tranpile): ${answer.toString().length}chars`);
                }
                else {
                    console.log(JSON.stringify(result, null, 4));
                    console.log(`❌ Too bad, your result does not match the expected output! Try again! ❌`);
                }
            }
            catch (e) {
                console.error(`🔥 Uh oh, something went wrong! See exception bellow: 🔥`);
                console.error(e);
                e.printStackTrace();
            }
        }
    }
    if (challenges === 0) {
        console.warn(`🤔 No challenge executed, uncomment export function in ./src/challenges/X/answer.ts file to try solving some of them!`);
    }
})();
function deepEqual(expected, submitted) {
    if (typeof expected !== typeof submitted) {
        return false;
    }
    else if (typeof expected === 'string'
        || typeof expected === 'number'
        || typeof expected === 'boolean') {
        return expected === submitted;
    }
    else if (typeof expected === 'object') {
        if (Array.isArray(expected) === true) {
            if (Array.isArray(submitted) === false || expected.length !== submitted.length) {
                return false;
            }
            else {
                for (let i = 0; i < submitted.length; i++) {
                    if (deepEqual(expected[i], submitted[i]) === false) {
                        return false;
                    }
                }
                return true;
            }
        }
        else {
            const expectedKeys = Object.keys(expected).filter(key => expected[key] !== undefined).sort();
            const submittedKeys = Object.keys(submitted).filter(key => submitted[key] !== undefined).sort();
            if (deepEqual(expectedKeys, submittedKeys) === false
                || deepEqual(expectedKeys.map(e => expected[e]), submittedKeys.map(e => submitted[e])) === false) {
                return false;
            }
            return true;
        }
    }
    else {
        console.warn(`Type cannot be compared`);
        return false;
    }
}
