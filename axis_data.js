// axis_data.js
// Lightweight accessor that exposes the in-file TRACKS and SECTIONS as a single object.
// This file does NOT duplicate the data; it references the existing constants defined in index.html.
// It is safe to include for tooling or to be used later when we want a single source file.

(function(){
  try {
    const sections = {
      DAILY_SECTIONS: typeof DAILY_SECTIONS !== "undefined" ? DAILY_SECTIONS : null,
      RESTORATIVE_SECTIONS: typeof RESTORATIVE_SECTIONS !== "undefined" ? RESTORATIVE_SECTIONS : null,
      MORNING_SECTIONS: typeof MORNING_SECTIONS !== "undefined" ? MORNING_SECTIONS : null,
      PRIME_SECTIONS: typeof PRIME_SECTIONS !== "undefined" ? PRIME_SECTIONS : null,
      DESK_SECTIONS: typeof DESK_SECTIONS !== "undefined" ? DESK_SECTIONS : null,
      SCREEN_SECTIONS: typeof SCREEN_SECTIONS !== "undefined" ? SCREEN_SECTIONS : null,
      HIP_SECTIONS: typeof HIP_SECTIONS !== "undefined" ? HIP_SECTIONS : null,
      BACK_SECTIONS: typeof BACK_SECTIONS !== "undefined" ? BACK_SECTIONS : null,
      STEADY_SECTIONS: typeof STEADY_SECTIONS !== "undefined" ? STEADY_SECTIONS : null,
      FREELY_SECTIONS: typeof FREELY_SECTIONS !== "undefined" ? FREELY_SECTIONS : null,
      FEET_SECTIONS: typeof FEET_SECTIONS !== "undefined" ? FEET_SECTIONS : null,
      TRANSIT_SECTIONS: typeof TRANSIT_SECTIONS !== "undefined" ? TRANSIT_SECTIONS : null,
      ANXIETY_SECTIONS: typeof ANXIETY_SECTIONS !== "undefined" ? ANXIETY_SECTIONS : null,
      STRESS_SECTIONS: typeof STRESS_SECTIONS !== "undefined" ? STRESS_SECTIONS : null,
      KNEE_SECTIONS: typeof KNEE_SECTIONS !== "undefined" ? KNEE_SECTIONS : null,
      GOLF_SECTIONS: typeof GOLF_SECTIONS !== "undefined" ? GOLF_SECTIONS : null,
      TENNIS_SECTIONS: typeof TENNIS_SECTIONS !== "undefined" ? TENNIS_SECTIONS : null,
      WALKING_SECTIONS: typeof WALKING_SECTIONS !== "undefined" ? WALKING_SECTIONS : null,
      RUNNING_SECTIONS: typeof RUNNING_SECTIONS !== "undefined" ? RUNNING_SECTIONS : null,
      THORACIC_SECTIONS: typeof THORACIC_SECTIONS !== "undefined" ? THORACIC_SECTIONS : null,
      WRIST_SECTIONS: typeof WRIST_SECTIONS !== "undefined" ? WRIST_SECTIONS : null,
    };

    const data = {
      TRACKS: typeof TRACKS !== "undefined" ? TRACKS : null,
      SECTIONS: sections,
      generatedAt: new Date().toISOString()
    };

    // Expose a global read-only reference for tooling / scripts to consume.
    Object.defineProperty(window, 'AXIS_DATA', {
      value: data,
      writable: false,
      configurable: true,
      enumerable: true
    });
  } catch (e) {
    console.error('axis_data: failed to build AXIS_DATA', e);
  }
})();

