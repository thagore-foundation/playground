/* tslint:disable */
/* eslint-disable */

/**
 * Result of compiling and running Thagore source in the browser.
 */
export class CompileResult {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Returns diagnostics as a JSON array string.
     */
    readonly errors: string;
    /**
     * Returns captured stdout/stderr text.
     */
    readonly output: string;
    /**
     * `true` when compilation and execution succeeded.
     */
    success: boolean;
}

/**
 * Parses and type-checks one Thagore source buffer without executing it.
 */
export function check_only(source: string): string;

/**
 * Parses, type-checks, and interprets one Thagore source buffer.
 */
export function compile_and_run(source: string): CompileResult;

/**
 * Formats one Thagore source buffer using the official formatter.
 */
export function format_source(source: string): string;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly __wbg_compileresult_free: (a: number, b: number) => void;
    readonly __wbg_get_compileresult_success: (a: number) => number;
    readonly __wbg_set_compileresult_success: (a: number, b: number) => void;
    readonly check_only: (a: number, b: number) => [number, number];
    readonly compile_and_run: (a: number, b: number) => number;
    readonly compileresult_errors: (a: number) => [number, number];
    readonly compileresult_output: (a: number) => [number, number];
    readonly format_source: (a: number, b: number) => [number, number];
    readonly __wbindgen_externrefs: WebAssembly.Table;
    readonly __wbindgen_malloc: (a: number, b: number) => number;
    readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
    readonly __wbindgen_free: (a: number, b: number, c: number) => void;
    readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;

/**
 * Instantiates the given `module`, which can either be bytes or
 * a precompiled `WebAssembly.Module`.
 *
 * @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
 *
 * @returns {InitOutput}
 */
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
 * If `module_or_path` is {RequestInfo} or {URL}, makes a request and
 * for everything else, calls `WebAssembly.instantiate` directly.
 *
 * @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
 *
 * @returns {Promise<InitOutput>}
 */
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
