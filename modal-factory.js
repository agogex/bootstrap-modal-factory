; (function($) {
    $.fn.modalFactory = function() {
        'use strict';
        
        var modalTemplate = this;
        
        function cloneModal() {
            return modalTemplate.clone().removeClass('modal-template');
        }

        function addCloseEventHandler(modal) {
            modal.on('hidden.bs.modal', function(event) {
                $(this).remove();
            });
        }

        function getModal(options) {
            var modal = cloneModal();

            if (options.modalSize) {
                modal.find('.modal-dialog').addClass(options.modalSize);
            }
            if (options.modalClass) {
                modal.find('.modal-dialog').addClass(options.modalClass);
            }
            if (options.modalId) {
                modal.find('.modal-content').attr('Id', options.modalId);
            }
            if (options.modalTitle) {
                modal.find('.modal-title').text(options.modalTitle);
            }
            if (options.modalUrl) {
                modal.find('.modal-content').load(options.modalUrl);
            }
            if (options.modalBody) {
                modal.find('.modal-body').html(options.modalBody);
            }
            if (options.modalFooter) {
                modal.find('.modal-footer').html(options.modalFooter);
            }
            
            addCloseEventHandler(modal);
            modal.modal('show');
            return modal;
        }

        (function initModalFactory() {
            $('body').on('click', '.call-modal', function(event) {
                event.preventDefault();
                var btn = $(this);

                var mSize = btn.data('modal-size'),
                    mUrl = btn.data('modal-url'),
                    mClass = btn.data('modal-class'),
                    mId = btn.data('modal-id'),
                    mTitle = btn.data('modal-title'),
                    mBody = btn.data('modal-body'),
                    mFooter = btn.data('modal-footer');

                getModal({
                    modalSize: mSize,
                    modalUrl: mUrl,
                    modalClass: mClass,
                    modalId: mId,
                    modalTitle: mTitle,
                    modalBody: mBody,
                    modalFooter: mFooter
                });
            });
        })();

        return this;
    };
})(jQuery);