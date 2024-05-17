/* This file is generated by scripts/process-messages/index.js. Do not edit! */

import { DEV } from 'esm-env';

var bold = 'font-weight: bold';
var normal = 'font-weight: normal';

/**
 * The `%attribute%` attribute on `%html%` changed its value between server and client renders. The client value, `%value%`, will be ignored in favour of the server value
 * @param {string} attribute
 * @param {string} html
 * @param {string} value
 */
export function hydration_attribute_changed(attribute, html, value) {
	if (DEV) {
		console.warn(`%c[svelte] ${"hydration_attribute_changed"}\n%c${`The \`${attribute}\` attribute on \`${html}\` changed its value between server and client renders. The client value, \`${value}\`, will be ignored in favour of the server value`}`, bold, normal);
	} else {
		// TODO print a link to the documentation
		console.warn("hydration_attribute_changed");
	}
}

/**
 * Hydration failed because the initial UI does not match what was rendered on the server. The error occurred near %location%
 * @param {string | undefined | null} [location]
 */
export function hydration_mismatch(location) {
	if (DEV) {
		console.warn(`%c[svelte] ${"hydration_mismatch"}\n%c${location ? `Hydration failed because the initial UI does not match what was rendered on the server. The error occurred near ${location}` : "Hydration failed because the initial UI does not match what was rendered on the server"}`, bold, normal);
	} else {
		// TODO print a link to the documentation
		console.warn("hydration_mismatch");
	}
}

/**
 * Tried to unmount a component that was not mounted
 */
export function lifecycle_double_unmount() {
	if (DEV) {
		console.warn(`%c[svelte] ${"lifecycle_double_unmount"}\n%c${"Tried to unmount a component that was not mounted"}`, bold, normal);
	} else {
		// TODO print a link to the documentation
		console.warn("lifecycle_double_unmount");
	}
}

/**
 * %parent% passed a value to %child% with `bind:`, but the value is owned by %owner%. Consider creating a binding between %owner% and %parent%
 * @param {string} parent
 * @param {string} child
 * @param {string} owner
 */
export function ownership_invalid_binding(parent, child, owner) {
	if (DEV) {
		console.warn(`%c[svelte] ${"ownership_invalid_binding"}\n%c${`${parent} passed a value to ${child} with \`bind:\`, but the value is owned by ${owner}. Consider creating a binding between ${owner} and ${parent}`}`, bold, normal);
	} else {
		// TODO print a link to the documentation
		console.warn("ownership_invalid_binding");
	}
}

/**
 * %component% mutated a value owned by %owner%. This is strongly discouraged. Consider passing values to child components with `bind:`, or use a callback instead
 * @param {string | undefined | null} [component]
 * @param {string | undefined | null} [owner]
 */
export function ownership_invalid_mutation(component, owner) {
	if (DEV) {
		console.warn(`%c[svelte] ${"ownership_invalid_mutation"}\n%c${component ? `${component} mutated a value owned by ${owner}. This is strongly discouraged. Consider passing values to child components with \`bind:\`, or use a callback instead` : "Mutating a value outside the component that created it is strongly discouraged. Consider passing values to child components with `bind:`, or use a callback instead"}`, bold, normal);
	} else {
		// TODO print a link to the documentation
		console.warn("ownership_invalid_mutation");
	}
}

/**
 * Reactive `$state(...)` proxies and the values they proxy have different identities. Because of this, comparisons with `%operator%` will produce unexpected results. Consider using `$state.is(a, b)` instead
 * @param {string} operator
 */
export function state_proxy_equality_mismatch(operator) {
	if (DEV) {
		console.warn(`%c[svelte] ${"state_proxy_equality_mismatch"}\n%c${`Reactive \`$state(...)\` proxies and the values they proxy have different identities. Because of this, comparisons with \`${operator}\` will produce unexpected results. Consider using \`$state.is(a, b)\` instead`}`, bold, normal);
	} else {
		// TODO print a link to the documentation
		console.warn("state_proxy_equality_mismatch");
	}
}