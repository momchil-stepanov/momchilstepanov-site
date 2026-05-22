/**
 * A single audio sample shown in the accordion list / inline player.
 *
 * All copy fields are bilingual to keep one source per page across
 * `/bg/` and `/en/`.
 */
export interface Sample {
  /** Stable unique id within a page. Used as DOM id and accordion key. */
  id: string;

  /** Display title. */
  title: { bg: string; en: string };

  /** One-line context line (client, format, genre, etc.). */
  description: { bg: string; en: string };

  /** Human-readable duration, e.g. "0:45". */
  duration: string;

  /** Path under /public, e.g. "/audio/advertising/sample-01.mp3". */
  audioUrl: string;

  /** Optional structured metadata, surfaced lightly in UI. */
  metadata?: {
    client?: string;
    year?: number;
    genre?: string;
    author?: string;
  };
}

export type SamplePage = 'advertising' | 'voice-over' | 'audiobooks' | 'music';
