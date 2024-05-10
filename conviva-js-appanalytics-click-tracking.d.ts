import { FilterCriterion, BrowserPlugin } from '@convivainc/browser-tracker-core';
import { DynamicContext, CommonEventProperties, LinkClickEvent, ButtonClickEvent } from '@convivainc/tracker-core';
/**
 * Link click tracking
 *
 * Will automatically tracking link clicks once enabled with 'enableLinkClickTracking'
 * or you can manually track link clicks with 'trackLinkClick'
 */
declare function LinkClickTrackingPlugin(): BrowserPlugin;
/** The configuration for automatic link click tracking */
interface LinkClickTrackingConfiguration {
    /** The filter options for the link click tracking */
    options?: FilterCriterion<HTMLElement> | null;
    /**
     * Captures middle click events in browsers that don't generate standard click
     * events for middle click actions
     */
    pseudoClicks?: boolean | null;
    /** Whether the content of the links should be tracked */
    trackContent?: boolean | null;
    /** The dyanmic context which will be evaluated for each link click event */
    context?: DynamicContext | null;
}
/** The configuration for automatic button click tracking */
interface ButtonClickTrackingConfiguration {
    /** The filter options for the button click tracking */
    options?: FilterCriterion<HTMLElement> | null;
    /** Whether the content of the buttons should be tracked */
    trackContent?: boolean | null;
    /** The dyanmic context which will be evaluated for each button click event */
    context?: DynamicContext | null;
}
/**
 * Enable link click tracking
 *
 * @remarks
 * The default behaviour is to use actual click events. However, some browsers
 * (e.g., Firefox, Opera, and Konqueror) don't generate click events for the middle mouse button.
 *
 * To capture more "clicks", the pseudo click-handler uses mousedown + mouseup events.
 * This is not industry standard and is vulnerable to false positives (e.g., drag events).
 */
declare function enableLinkClickTracking(configuration?: LinkClickTrackingConfiguration, trackers?: Array<string>): void;
/**
 * Enable button click tracking
 *
 * @remarks
 * The default behaviour is to use actual click events. However, some browsers
 * (e.g., Firefox, Opera, and Konqueror) don't generate click events for the middle mouse button.
 *
 * To capture more "clicks", the pseudo click-handler uses mousedown + mouseup events.
 * This is not industry standard and is vulnerable to false positives (e.g., drag events).
 */
declare function enableButtonClickTracking(configuration?: ButtonClickTrackingConfiguration, trackers?: Array<string>): void;
/**
 * Add click event listeners to links which have been added to the page since the
 * last time enableLinkClickTracking or refreshLinkClickTracking was used
 *
 * @param trackers - The tracker identifiers which the have their link click state refreshed
 */
declare function refreshLinkClickTracking(trackers?: Array<string>): void;
/**
 * Add click event listeners to buttons which have been added to the page since the
 * last time enableButtonClickTracking or refreshButtonClickTracking was used
 *
 * @param trackers - The tracker identifiers which the have their button click state refreshed
 */
declare function refreshButtonClickTracking(trackers?: Array<string>): void;
/**
 * Manually log a click
 *
 * @param event - The event information
 * @param trackers - The tracker identifiers which the event will be sent to
 */
declare function trackLinkClick(event: LinkClickEvent & CommonEventProperties, trackers?: Array<string>): void;
/**
 * Manually log a button click
 *
 * @param event - The event information
 * @param trackers - The tracker identifiers which the event will be sent to
 */
declare function trackButtonClick(event: ButtonClickEvent & CommonEventProperties, trackers?: Array<string>): void;
export { LinkClickTrackingPlugin, LinkClickTrackingConfiguration, ButtonClickTrackingConfiguration, enableLinkClickTracking, enableButtonClickTracking, refreshLinkClickTracking, refreshButtonClickTracking, trackLinkClick, trackButtonClick };
