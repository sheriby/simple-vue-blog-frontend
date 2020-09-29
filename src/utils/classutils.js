/**
 * classutils.js
 * some function to handle the classname of the dom node
 *
 * for all function:
 *  params => node and className is required while regex and confirm is not which is used
 *             to create RegExp object as less as possible.
 */

export function hasClass(node, className, regex) {
  const re = regex || new RegExp('\\b' + className + '\\b', 'g')
  return node.className.search(re) !== -1
}

export function addClass(node, className, regex, confirm) {
  const re = regex || new RegExp('\\b' + className + '\\b', 'g')
  if (confirm || !hasClass(node, className, re)) {
    node.className =
      node.className === '' ? className : node.className + ' ' + className
  }
}

export function removeClass(node, className, regex, confirm) {
  const re = regex || new RegExp('\\b' + className + '\\b', 'g')
  if (confirm || hasClass(node, className, re)) {
    node.className = node.className.replace(re, '')
  }
}

export function toggleClass(node, className, regex) {
  const re = regex || new RegExp('\\b' + className + '\\b', 'g')
  if (hasClass(node, className, re)) {
    addClass(node, className, re, true)
  } else {
    removeClass(node, className, re, true)
  }
}

export function switchClass(node, oldClassName, newClassName) {
  removeClass(node, oldClassName)
  addClass(node, newClassName)
}
