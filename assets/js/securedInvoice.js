/**
 * SUMMARY
 *
 * DESC
 *
 * @license Use of this software requires acceptance of the License Agreement. See LICENSE file.
 * @copyright Copyright © 2016-present heidelpay GmbH. All rights reserved.
 * @author Florian Evertz
 * @category WOOCOMMERCE
 */

/**
 * This function checks if the billing_company is empty
 */
jQuery(function () {
    jQuery('#billing_company').change(function () {
        if (jQuery('#billing_company').val() !== '') {
            jQuery('li.payment_method_hp_ivpg').hide();
        } else {
            jQuery('li.payment_method_hp_ivpg').show();
        }
        ;

        var date_input = document.getElementById("hp_date");

        date_input.reportValidity = function() {
            var inputDate = this.valueAsDate;
            var currentDate = new Date();
            return new Date(currentDate-inputDate).getFullYear() - new Date(0).getFullYear() < 18
        };
    });
});