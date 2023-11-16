import { DevelopmentSection } from '@/components/doc/common/developmentsection';
import { DocSectionText } from '@/components/doc/common/docsectiontext';

import Link from 'next/link';

export function AccessibilityDoc() {
    return (
        <DevelopmentSection>
            <DocSectionText id="accessibility" label="Accessibility">
                <h3>Screen Reader</h3>
                <p>
                    The container element that wraps the layout options buttons has a <i>group</i> role whereas each button element uses <i>button</i> role and <i>aria-pressed</i> is updated depending on selection state. Values to describe the
                    buttons are derived from the <i>aria.listView</i> and <i>aria.gridView</i> properties of the <Link href="/locale">locale</Link> API respectively.
                </p>

                <p>
                    Refer to <Link href="/paginator">paginator</Link> accessibility documentation for the paginator of the component.
                </p>

                <h3>Keyboard Support</h3>
                <div className="doc-tablewrapper">
                    <table className="doc-table">
                        <thead>
                            <tr>
                                <th>Key</th>
                                <th>Function</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <i>tab</i>
                                </td>
                                <td>Moves focus to the buttons.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>space</i>
                                </td>
                                <td>Toggles the checked state of a button.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSectionText>
        </DevelopmentSection>
    );
}
