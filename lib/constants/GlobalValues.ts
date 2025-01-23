export const enum Global {
    // Removed - These values are archived incase future issues arise due to unhandled cases

    //CurrentCharacter = 'currentchar', // current char filename, locates dir   == removed on db migration
    //CurrentCharacterCard = 'charcard', // note: use Object ? - stores charactercard   == removed on db migration

    //InstructName = 'instructname', // name of current instruct preset == removed on db migration
    //CurrentInstruct = 'currentinstruct', // note: use Object ? - stores instruct == removed on db migration

    //CurrentUser = 'currentuser', // current username, locates dir == removed on db migration
    //CurrentUserCard = 'usercard', // note: use Object ? - stores usercard == removed on db migration

    // CurrentChat = 'currentchat', // current chat filename, locates dir    == removed on db migration
    //Messages = 'messages', === removed on zustand migration

    // EditedWindow = 'editedwindow', // exit editing window confirmation == never us

    // Processing

    // NowGenerating = 'nowgenerating', // generation signal == removed since migrtion of generating state to db

    // RecentMessages = 'recentmessages', // removed since character list rework to include last_modified

    // InstructID = 'instructid', // removed with instruct persist

    // UserID = 'userid', // moved to zustand state

    // Management

    CpuFeatures = 'cpufeatures',

    Logs = 'logs',

    AppMode = 'appmode',
    // User

    // Chat

    // Instruct

    // Presets
    // TODO: Remove once migration complete
    PresetID = 'presetID',
    PresetData = 'presetdata',
    PresetName = 'presetdame',

    // Lorebooks

    LorebookNames = 'lorebooknames',

    // APIs

    /**
     * These values are now only used for the legacy system
     * Will likely be removed in future
     */

    APIType = 'endpointtype', // name of current api mode

    KAIEndpoint = 'kaiendpoint', // kai api endpoint

    TGWUIStreamingEndpoint = 'tgwuistreamingendpoint', // tgwui streaming web socket

    HordeKey = 'hordekey', // api key for horde
    HordeModels = 'hordemodel', // names of horde models to be used
    HordeWorkers = 'hordeworker', // List of available horde workers

    MancerKey = 'mancerkey', // api key for mancer
    MancerModel = 'mancermodel', // selected mancer model

    NovelKey = 'novelkey', // novelai key
    NovelModel = 'novelmodel', // novelai model

    AphroditeKey = 'aphroditekey', // api key for aphrodite, default is `EMPTY`

    CompletionsEndpoint = 'completionsendpoint',
    CompletionsKey = 'completionskey',
    CompletionsModel = 'completionsModel',

    OpenAIKey = 'openaikey',
    OpenAIModel = 'openaimodel',

    OpenRouterModel = 'openroutermodel',
    OpenRouterKey = 'openrouterkey',

    OllamaModel = 'ollamamodel',
    OllamaEndpoint = 'ollamaendpoint',

    ClaudeModel = 'claudemodel',
    ClaudeEndpoint = 'claudeendpoint',
    ClaudeAPIKey = 'claudeapikey',
    ClaudePrefill = 'claudeprefill',
    ClaudeFirstMessage = 'claudefirstmessage',

    ChatCompletionsEndpoint = 'chatcompletionsendpoint',
    ChatCompletionsKey = 'chatcompletionskey',
    ChatCompletionsModel = 'chatcompletionsmodel',

    CohereKey = 'coherekey',
    CohereModel = 'coheremodel',

    // Local

    // object containing model info object based on db schema, needed for auto-loading
    LocalModel = 'localmodel',
    // preset values for model cpu specs
    LocalPreset = 'localpreset',
    // whether or not a KV cache has been loaded
    LocalSessionLoaded = 'localsessionloaded',

    // TODO move to AppSettings
    TTSSpeaker = 'ttsspeaker',
    TTSEnable = 'ttsenable',
    TTSAuto = `ttsauto`,
    // TTSAutoStart = 'ttsautostart', // moved autoTTS to zustand state
}

export enum GenerationSettings {
    DisableFirst = 'disablefirst',
    UseFormatter = 'useformatter',
    FormatterTarget = 'formattertarget',
    FormatterSource = 'formattersource',
}

export enum AppSettings {
    DevMode = 'devmode',
    DarkMode = 'darkmode',
    PrimaryHue = 'primaryhue',
    AnimateEditor = 'animateeditor',
    CreateFirstMes = 'createfirstmes',
    ChatOnStartup = 'chatonstartup',
    AutoLoadLocal = 'autoloadlocal',
    AutoScroll = 'autoscroll',
    SendOnEnter = 'sendonenter',
    SaveLocalKV = 'savelocalkv',
    PrintContext = 'printcontext',
    CreateDefaultCard = 'createdefaultcard',
    BypassContextLength = 'bypasscontextlength',
    NotifyOnComplete = 'notifyOnComplete',
    PlayNotificationSound = 'notifySound',
    VibrateNotification = 'notifyvibrate',
    ShowNotificationText = 'shownotificationtext',
    LocallyAuthenticateUser = 'localauthuser',
    UnlockOrientation = 'unlockorientation',
    UseLegacyAPI = 'uselegacyapi',
}

export enum AppMode {
    LOCAL = 'local',
    REMOTE = 'remote',
}

/**
 * Default settings on first install
 * TODO: Remove primary hue to simply
 */
export const AppSettingsDefault: Record<AppSettings, boolean | number> = {
    [AppSettings.AnimateEditor]: true,
    [AppSettings.AutoLoadLocal]: false,
    [AppSettings.AutoScroll]: true,
    [AppSettings.ChatOnStartup]: false,
    [AppSettings.CreateFirstMes]: true,
    [AppSettings.DarkMode]: true,
    [AppSettings.DevMode]: false,
    [AppSettings.PrimaryHue]: 240,
    [AppSettings.SendOnEnter]: false,
    [AppSettings.SaveLocalKV]: false,
    [AppSettings.PrintContext]: false,
    [AppSettings.CreateDefaultCard]: true,
    [AppSettings.BypassContextLength]: false,
    [AppSettings.NotifyOnComplete]: false,
    [AppSettings.PlayNotificationSound]: false,
    [AppSettings.VibrateNotification]: false,
    [AppSettings.LocallyAuthenticateUser]: false,
    [AppSettings.ShowNotificationText]: false,
    [AppSettings.UnlockOrientation]: false,
    [AppSettings.UseLegacyAPI]: false,
}