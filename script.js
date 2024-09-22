const oneTimeOptions = document.getElementById('one-time-options');
        const monthlyOptions = document.getElementById('monthly-options');
        const customAmountInput = document.getElementById('custom-amount-input');
        const donationAmountField = document.getElementById('donation-amount');
        const buttons = document.querySelectorAll('.amount-button');
        const upiDetails = document.getElementById('upi-details');
        const bankAccountDetails = document.getElementById('bank-account-details');

        // Handle donation frequency change
        document.querySelectorAll('input[name="frequency"]').forEach(function(radio) {
            radio.addEventListener('change', function() {
                clearSelection();
                donationAmountField.value = ''; // Clear amount when frequency changes
                customAmountInput.style.display = 'none'; // Hide custom amount input by default

                if (this.value === 'one-time') {
                    oneTimeOptions.style.display = 'flex';
                    monthlyOptions.style.display = 'none';
                } else if (this.value === 'monthly') {
                    oneTimeOptions.style.display = 'none';
                    monthlyOptions.style.display = 'flex';
                }
            });
        });

        // Handle preset amount button click
        buttons.forEach(function(button) {
            button.addEventListener('click', function() {
                clearSelection();
                const value = this.getAttribute('data-value');
                if (value === 'other') {
                    customAmountInput.style.display = 'block';
                    donationAmountField.value = ''; // Clear preset amount
                } else {
                    donationAmountField.value = value;
                    customAmountInput.style.display = 'none';
                }
                this.classList.add('selected');
            });
        });

        // Handle custom amount input
        document.getElementById('custom-amount').addEventListener('input', function() {
            donationAmountField.value = this.value;
        });

        // Clear selected state from buttons
        function clearSelection() {
            buttons.forEach(function(button) {
                button.classList.remove('selected');
            });
        }

        // Handle payment method change
        document.querySelectorAll('input[name="payment-method"]').forEach(function(radio) {
            radio.addEventListener('change', function() {
                if (this.value === 'upi') {
                    upiDetails.style.display = 'block';
                    bankAccountDetails.style.display = 'none';
                } else if (this.value === 'bank-account') {
                    upiDetails.style.display = 'none';
                    bankAccountDetails.style.display = 'block';
                }
            });
        });