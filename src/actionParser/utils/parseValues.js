const parseValues = (element) => {
    const dataValueAttr = 'data-value';
    const bindedValues = {};
    const values = element.querySelectorAll(`[${dataValueAttr}]`);
    values.forEach((valueElement) => {
        const nameDefined = valueElement.getAttribute(dataValueAttr) || 'default_name';
        let value = valueElement.innerHTML;
        if (valueElement.tagName === 'INPUT') {
            value = valueElement.value;
        }
        //TODO: Can we get a boolean or a integer from the value property of an element?
        bindedValues[nameDefined] = { el: valueElement, value };
    });
    return bindedValues;
};
export default parseValues;
