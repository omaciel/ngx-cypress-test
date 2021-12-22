import { onDatePickerPage } from "../support/page_objects/datepickerPage"
import { onFormLayoutsPage } from "../support/page_objects/formLayoutsPage"
import { navigateTo, onNavigationPage } from "../support/page_objects/navigationPage"
import { onSmartTablePage } from "../support/page_objects/smartTablePage"

describe('Test with Page Objects', () => {
    beforeEach('open application', () => {
        cy.openHomePage()
    })

    it('verify navigation across the pages', () => {
        navigateTo.formLayoutsPage()
        navigateTo.datepickerPage()
        navigateTo.smartTablePage()
        navigateTo.toasterPage()
        navigateTo.tooltipPage()
    })

    it.only('should submit Inline and Basic form and select tomorrow date on datepicker', () => {
        navigateTo.formLayoutsPage()
        onFormLayoutsPage.submitInlineFormWithNameAndEmail('Homer', 'hsimpson@example.com')
        onFormLayoutsPage.submitBasicFormWithEmailAndPassword('hsimpson@example.com', 'password')

        navigateTo.datepickerPage()
        onDatePickerPage.selectCommonDatePickerDateFromToday(48)
        onDatePickerPage.selectDatePickerWithRangeFromToday(7, 14)

        navigateTo.smartTablePage()
        onSmartTablePage.addRecordWithFirstAndLastName('Homer', 'Simpson')
        onSmartTablePage.updateAgeByFirstName('Homer', 47)
        onSmartTablePage.deleteRowByIndex(1)

    })
})