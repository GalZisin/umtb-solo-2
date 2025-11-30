import { Calendar } from 'primeng/calendar';

// Patch only once
if (!(Calendar.prototype as any)._patchedResize) {
    const original = Calendar.prototype.bindDocumentResizeListener;

    Calendar.prototype.bindDocumentResizeListener = function () {
        try {
            const win = document?.defaultView;

            // Prevent crash if undefined
            if (!win || !win.addEventListener) {
                return; // skip adding and prevent error
            }

            return original.apply(this);
        } catch {
            // Silent fail – prevents the crash
            return;
        }
    };

    (Calendar.prototype as any)._patchedResize = true;
}
