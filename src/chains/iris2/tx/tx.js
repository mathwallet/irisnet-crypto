/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.iris2 = (function () {

    /**
     * Namespace iris2.
     * @exports iris2
     * @namespace
     */
    var iris2 = {};

    iris2.Coin = (function () {

        /**
         * Properties of a Coin.
         * @memberof iris2
         * @interface ICoin
         * @property {string} denom Coin denom
         * @property {string} amount Coin amount
         */

        /**
         * Constructs a new Coin.
         * @memberof iris2
         * @classdesc Represents a Coin.
         * @implements ICoin
         * @constructor
         * @param {iris2.ICoin=} [properties] Properties to set
         */
        function Coin(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Coin denom.
         * @member {string} denom
         * @memberof iris2.Coin
         * @instance
         */
        Coin.prototype.denom = "";

        /**
         * Coin amount.
         * @member {string} amount
         * @memberof iris2.Coin
         * @instance
         */
        Coin.prototype.amount = "";

        /**
         * Creates a new Coin instance using the specified properties.
         * @function create
         * @memberof iris2.Coin
         * @static
         * @param {iris2.ICoin=} [properties] Properties to set
         * @returns {iris2.Coin} Coin instance
         */
        Coin.create = function create(properties) {
            return new Coin(properties);
        };

        /**
         * Encodes the specified Coin message. Does not implicitly {@link iris2.Coin.verify|verify} messages.
         * @function encode
         * @memberof iris2.Coin
         * @static
         * @param {iris2.ICoin} message Coin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Coin.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.denom);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.amount);
            return writer;
        };

        /**
         * Encodes the specified Coin message, length delimited. Does not implicitly {@link iris2.Coin.verify|verify} messages.
         * @function encodeDelimited
         * @memberof iris2.Coin
         * @static
         * @param {iris2.ICoin} message Coin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Coin.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Coin message from the specified reader or buffer.
         * @function decode
         * @memberof iris2.Coin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {iris2.Coin} Coin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Coin.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.iris2.Coin();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.denom = reader.string();
                        break;
                    case 2:
                        message.amount = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            if (!message.hasOwnProperty("denom"))
                throw $util.ProtocolError("missing required 'denom'", { instance: message });
            if (!message.hasOwnProperty("amount"))
                throw $util.ProtocolError("missing required 'amount'", { instance: message });
            return message;
        };

        /**
         * Decodes a Coin message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof iris2.Coin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {iris2.Coin} Coin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Coin.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Coin message.
         * @function verify
         * @memberof iris2.Coin
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Coin.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.denom))
                return "denom: string expected";
            if (!$util.isString(message.amount))
                return "amount: string expected";
            return null;
        };

        /**
         * Creates a Coin message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof iris2.Coin
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {iris2.Coin} Coin
         */
        Coin.fromObject = function fromObject(object) {
            if (object instanceof $root.iris2.Coin)
                return object;
            var message = new $root.iris2.Coin();
            if (object.denom != null)
                message.denom = String(object.denom);
            if (object.amount != null)
                message.amount = String(object.amount);
            return message;
        };

        /**
         * Creates a plain object from a Coin message. Also converts values to other types if specified.
         * @function toObject
         * @memberof iris2.Coin
         * @static
         * @param {iris2.Coin} message Coin
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Coin.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.denom = "";
                object.amount = "";
            }
            if (message.denom != null && message.hasOwnProperty("denom"))
                object.denom = message.denom;
            if (message.amount != null && message.hasOwnProperty("amount"))
                object.amount = message.amount;
            return object;
        };

        /**
         * Converts this Coin to JSON.
         * @function toJSON
         * @memberof iris2.Coin
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Coin.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Coin;
    })();

    iris2.MsgSend = (function () {

        /**
         * Properties of a MsgSend.
         * @memberof iris2
         * @interface IMsgSend
         * @property {Uint8Array} FromAddress MsgSend FromAddress
         * @property {Uint8Array} ToAddress MsgSend ToAddress
         * @property {Array.<iris2.ICoin>|null} [Amount] MsgSend Amount
         */

        /**
         * Constructs a new MsgSend.
         * @memberof iris2
         * @classdesc Represents a MsgSend.
         * @implements IMsgSend
         * @constructor
         * @param {iris2.IMsgSend=} [properties] Properties to set
         */
        function MsgSend(properties) {
            this.Amount = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MsgSend FromAddress.
         * @member {Uint8Array} FromAddress
         * @memberof iris2.MsgSend
         * @instance
         */
        MsgSend.prototype.FromAddress = $util.newBuffer([]);

        /**
         * MsgSend ToAddress.
         * @member {Uint8Array} ToAddress
         * @memberof iris2.MsgSend
         * @instance
         */
        MsgSend.prototype.ToAddress = $util.newBuffer([]);

        /**
         * MsgSend Amount.
         * @member {Array.<iris2.ICoin>} Amount
         * @memberof iris2.MsgSend
         * @instance
         */
        MsgSend.prototype.Amount = $util.emptyArray;

        /**
         * Creates a new MsgSend instance using the specified properties.
         * @function create
         * @memberof iris2.MsgSend
         * @static
         * @param {iris2.IMsgSend=} [properties] Properties to set
         * @returns {iris2.MsgSend} MsgSend instance
         */
        MsgSend.create = function create(properties) {
            return new MsgSend(properties);
        };

        /**
         * Encodes the specified MsgSend message. Does not implicitly {@link iris2.MsgSend.verify|verify} messages.
         * @function encode
         * @memberof iris2.MsgSend
         * @static
         * @param {iris2.IMsgSend} message MsgSend message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgSend.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.FromAddress);
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.ToAddress);
            if (message.Amount != null && message.Amount.length)
                for (var i = 0; i < message.Amount.length; ++i)
                    $root.iris2.Coin.encode(message.Amount[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified MsgSend message, length delimited. Does not implicitly {@link iris2.MsgSend.verify|verify} messages.
         * @function encodeDelimited
         * @memberof iris2.MsgSend
         * @static
         * @param {iris2.IMsgSend} message MsgSend message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgSend.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MsgSend message from the specified reader or buffer.
         * @function decode
         * @memberof iris2.MsgSend
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {iris2.MsgSend} MsgSend
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgSend.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.iris2.MsgSend();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.FromAddress = reader.bytes();
                        break;
                    case 2:
                        message.ToAddress = reader.bytes();
                        break;
                    case 3:
                        if (!(message.Amount && message.Amount.length))
                            message.Amount = [];
                        message.Amount.push($root.iris2.Coin.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            if (!message.hasOwnProperty("FromAddress"))
                throw $util.ProtocolError("missing required 'FromAddress'", { instance: message });
            if (!message.hasOwnProperty("ToAddress"))
                throw $util.ProtocolError("missing required 'ToAddress'", { instance: message });
            return message;
        };

        /**
         * Decodes a MsgSend message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof iris2.MsgSend
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {iris2.MsgSend} MsgSend
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgSend.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MsgSend message.
         * @function verify
         * @memberof iris2.MsgSend
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MsgSend.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!(message.FromAddress && typeof message.FromAddress.length === "number" || $util.isString(message.FromAddress)))
                return "FromAddress: buffer expected";
            if (!(message.ToAddress && typeof message.ToAddress.length === "number" || $util.isString(message.ToAddress)))
                return "ToAddress: buffer expected";
            if (message.Amount != null && message.hasOwnProperty("Amount")) {
                if (!Array.isArray(message.Amount))
                    return "Amount: array expected";
                for (var i = 0; i < message.Amount.length; ++i) {
                    var error = $root.iris2.Coin.verify(message.Amount[i]);
                    if (error)
                        return "Amount." + error;
                }
            }
            return null;
        };

        /**
         * Creates a MsgSend message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof iris2.MsgSend
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {iris2.MsgSend} MsgSend
         */
        MsgSend.fromObject = function fromObject(object) {
            if (object instanceof $root.iris2.MsgSend)
                return object;
            var message = new $root.iris2.MsgSend();
            if (object.FromAddress != null)
                if (typeof object.FromAddress === "string")
                    $util.base64.decode(object.FromAddress, message.FromAddress = $util.newBuffer($util.base64.length(object.FromAddress)), 0);
                else if (object.FromAddress.length)
                    message.FromAddress = object.FromAddress;
            if (object.ToAddress != null)
                if (typeof object.ToAddress === "string")
                    $util.base64.decode(object.ToAddress, message.ToAddress = $util.newBuffer($util.base64.length(object.ToAddress)), 0);
                else if (object.ToAddress.length)
                    message.ToAddress = object.ToAddress;
            if (object.Amount) {
                if (!Array.isArray(object.Amount))
                    throw TypeError(".iris2.MsgSend.Amount: array expected");
                message.Amount = [];
                for (var i = 0; i < object.Amount.length; ++i) {
                    if (typeof object.Amount[i] !== "object")
                        throw TypeError(".iris2.MsgSend.Amount: object expected");
                    message.Amount[i] = $root.iris2.Coin.fromObject(object.Amount[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a MsgSend message. Also converts values to other types if specified.
         * @function toObject
         * @memberof iris2.MsgSend
         * @static
         * @param {iris2.MsgSend} message MsgSend
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MsgSend.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Amount = [];
            if (options.defaults) {
                if (options.bytes === String)
                    object.FromAddress = "";
                else {
                    object.FromAddress = [];
                    if (options.bytes !== Array)
                        object.FromAddress = $util.newBuffer(object.FromAddress);
                }
                if (options.bytes === String)
                    object.ToAddress = "";
                else {
                    object.ToAddress = [];
                    if (options.bytes !== Array)
                        object.ToAddress = $util.newBuffer(object.ToAddress);
                }
            }
            if (message.FromAddress != null && message.hasOwnProperty("FromAddress"))
                object.FromAddress = options.bytes === String ? $util.base64.encode(message.FromAddress, 0, message.FromAddress.length) : options.bytes === Array ? Array.prototype.slice.call(message.FromAddress) : message.FromAddress;
            if (message.ToAddress != null && message.hasOwnProperty("ToAddress"))
                object.ToAddress = options.bytes === String ? $util.base64.encode(message.ToAddress, 0, message.ToAddress.length) : options.bytes === Array ? Array.prototype.slice.call(message.ToAddress) : message.ToAddress;
            if (message.Amount && message.Amount.length) {
                object.Amount = [];
                for (var j = 0; j < message.Amount.length; ++j)
                    object.Amount[j] = $root.iris2.Coin.toObject(message.Amount[j], options);
            }
            return object;
        };

        /**
         * Converts this MsgSend to JSON.
         * @function toJSON
         * @memberof iris2.MsgSend
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MsgSend.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MsgSend;
    })();

    iris2.MsgDelegate = (function () {

        /**
         * Properties of a MsgDelegate.
         * @memberof iris2
         * @interface IMsgDelegate
         * @property {Uint8Array} DelegatorAddress MsgDelegate DelegatorAddress
         * @property {Uint8Array} ValidatorAddress MsgDelegate ValidatorAddress
         * @property {iris2.ICoin} Amount MsgDelegate Amount
         */

        /**
         * Constructs a new MsgDelegate.
         * @memberof iris2
         * @classdesc Represents a MsgDelegate.
         * @implements IMsgDelegate
         * @constructor
         * @param {iris2.IMsgDelegate=} [properties] Properties to set
         */
        function MsgDelegate(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MsgDelegate DelegatorAddress.
         * @member {Uint8Array} DelegatorAddress
         * @memberof iris2.MsgDelegate
         * @instance
         */
        MsgDelegate.prototype.DelegatorAddress = $util.newBuffer([]);

        /**
         * MsgDelegate ValidatorAddress.
         * @member {Uint8Array} ValidatorAddress
         * @memberof iris2.MsgDelegate
         * @instance
         */
        MsgDelegate.prototype.ValidatorAddress = $util.newBuffer([]);

        /**
         * MsgDelegate Amount.
         * @member {iris2.ICoin} Amount
         * @memberof iris2.MsgDelegate
         * @instance
         */
        MsgDelegate.prototype.Amount = null;

        /**
         * Creates a new MsgDelegate instance using the specified properties.
         * @function create
         * @memberof iris2.MsgDelegate
         * @static
         * @param {iris2.IMsgDelegate=} [properties] Properties to set
         * @returns {iris2.MsgDelegate} MsgDelegate instance
         */
        MsgDelegate.create = function create(properties) {
            return new MsgDelegate(properties);
        };

        /**
         * Encodes the specified MsgDelegate message. Does not implicitly {@link iris2.MsgDelegate.verify|verify} messages.
         * @function encode
         * @memberof iris2.MsgDelegate
         * @static
         * @param {iris2.IMsgDelegate} message MsgDelegate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgDelegate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.DelegatorAddress);
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.ValidatorAddress);
            $root.iris2.Coin.encode(message.Amount, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified MsgDelegate message, length delimited. Does not implicitly {@link iris2.MsgDelegate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof iris2.MsgDelegate
         * @static
         * @param {iris2.IMsgDelegate} message MsgDelegate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgDelegate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MsgDelegate message from the specified reader or buffer.
         * @function decode
         * @memberof iris2.MsgDelegate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {iris2.MsgDelegate} MsgDelegate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgDelegate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.iris2.MsgDelegate();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.DelegatorAddress = reader.bytes();
                        break;
                    case 2:
                        message.ValidatorAddress = reader.bytes();
                        break;
                    case 3:
                        message.Amount = $root.iris2.Coin.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            if (!message.hasOwnProperty("DelegatorAddress"))
                throw $util.ProtocolError("missing required 'DelegatorAddress'", { instance: message });
            if (!message.hasOwnProperty("ValidatorAddress"))
                throw $util.ProtocolError("missing required 'ValidatorAddress'", { instance: message });
            if (!message.hasOwnProperty("Amount"))
                throw $util.ProtocolError("missing required 'Amount'", { instance: message });
            return message;
        };

        /**
         * Decodes a MsgDelegate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof iris2.MsgDelegate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {iris2.MsgDelegate} MsgDelegate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgDelegate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MsgDelegate message.
         * @function verify
         * @memberof iris2.MsgDelegate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MsgDelegate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!(message.DelegatorAddress && typeof message.DelegatorAddress.length === "number" || $util.isString(message.DelegatorAddress)))
                return "DelegatorAddress: buffer expected";
            if (!(message.ValidatorAddress && typeof message.ValidatorAddress.length === "number" || $util.isString(message.ValidatorAddress)))
                return "ValidatorAddress: buffer expected";
            {
                var error = $root.iris2.Coin.verify(message.Amount);
                if (error)
                    return "Amount." + error;
            }
            return null;
        };

        /**
         * Creates a MsgDelegate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof iris2.MsgDelegate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {iris2.MsgDelegate} MsgDelegate
         */
        MsgDelegate.fromObject = function fromObject(object) {
            if (object instanceof $root.iris2.MsgDelegate)
                return object;
            var message = new $root.iris2.MsgDelegate();
            if (object.DelegatorAddress != null)
                if (typeof object.DelegatorAddress === "string")
                    $util.base64.decode(object.DelegatorAddress, message.DelegatorAddress = $util.newBuffer($util.base64.length(object.DelegatorAddress)), 0);
                else if (object.DelegatorAddress.length)
                    message.DelegatorAddress = object.DelegatorAddress;
            if (object.ValidatorAddress != null)
                if (typeof object.ValidatorAddress === "string")
                    $util.base64.decode(object.ValidatorAddress, message.ValidatorAddress = $util.newBuffer($util.base64.length(object.ValidatorAddress)), 0);
                else if (object.ValidatorAddress.length)
                    message.ValidatorAddress = object.ValidatorAddress;
            if (object.Amount != null) {
                if (typeof object.Amount !== "object")
                    throw TypeError(".iris2.MsgDelegate.Amount: object expected");
                message.Amount = $root.iris2.Coin.fromObject(object.Amount);
            }
            return message;
        };

        /**
         * Creates a plain object from a MsgDelegate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof iris2.MsgDelegate
         * @static
         * @param {iris2.MsgDelegate} message MsgDelegate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MsgDelegate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.DelegatorAddress = "";
                else {
                    object.DelegatorAddress = [];
                    if (options.bytes !== Array)
                        object.DelegatorAddress = $util.newBuffer(object.DelegatorAddress);
                }
                if (options.bytes === String)
                    object.ValidatorAddress = "";
                else {
                    object.ValidatorAddress = [];
                    if (options.bytes !== Array)
                        object.ValidatorAddress = $util.newBuffer(object.ValidatorAddress);
                }
                object.Amount = null;
            }
            if (message.DelegatorAddress != null && message.hasOwnProperty("DelegatorAddress"))
                object.DelegatorAddress = options.bytes === String ? $util.base64.encode(message.DelegatorAddress, 0, message.DelegatorAddress.length) : options.bytes === Array ? Array.prototype.slice.call(message.DelegatorAddress) : message.DelegatorAddress;
            if (message.ValidatorAddress != null && message.hasOwnProperty("ValidatorAddress"))
                object.ValidatorAddress = options.bytes === String ? $util.base64.encode(message.ValidatorAddress, 0, message.ValidatorAddress.length) : options.bytes === Array ? Array.prototype.slice.call(message.ValidatorAddress) : message.ValidatorAddress;
            if (message.Amount != null && message.hasOwnProperty("Amount"))
                object.Amount = $root.iris2.Coin.toObject(message.Amount, options);
            return object;
        };

        /**
         * Converts this MsgDelegate to JSON.
         * @function toJSON
         * @memberof iris2.MsgDelegate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MsgDelegate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MsgDelegate;
    })();

    iris2.MsgUndelegate = (function () {

        /**
         * Properties of a MsgUndelegate.
         * @memberof iris2
         * @interface IMsgUndelegate
         * @property {Uint8Array} DelegatorAddress MsgUndelegate DelegatorAddress
         * @property {Uint8Array} ValidatorAddress MsgUndelegate ValidatorAddress
         * @property {iris2.ICoin} Amount MsgUndelegate Amount
         */

        /**
         * Constructs a new MsgUndelegate.
         * @memberof iris2
         * @classdesc Represents a MsgUndelegate.
         * @implements IMsgUndelegate
         * @constructor
         * @param {iris2.IMsgUndelegate=} [properties] Properties to set
         */
        function MsgUndelegate(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MsgUndelegate DelegatorAddress.
         * @member {Uint8Array} DelegatorAddress
         * @memberof iris2.MsgUndelegate
         * @instance
         */
        MsgUndelegate.prototype.DelegatorAddress = $util.newBuffer([]);

        /**
         * MsgUndelegate ValidatorAddress.
         * @member {Uint8Array} ValidatorAddress
         * @memberof iris2.MsgUndelegate
         * @instance
         */
        MsgUndelegate.prototype.ValidatorAddress = $util.newBuffer([]);

        /**
         * MsgUndelegate Amount.
         * @member {iris2.ICoin} Amount
         * @memberof iris2.MsgUndelegate
         * @instance
         */
        MsgUndelegate.prototype.Amount = null;

        /**
         * Creates a new MsgUndelegate instance using the specified properties.
         * @function create
         * @memberof iris2.MsgUndelegate
         * @static
         * @param {iris2.IMsgUndelegate=} [properties] Properties to set
         * @returns {iris2.MsgUndelegate} MsgUndelegate instance
         */
        MsgUndelegate.create = function create(properties) {
            return new MsgUndelegate(properties);
        };

        /**
         * Encodes the specified MsgUndelegate message. Does not implicitly {@link iris2.MsgUndelegate.verify|verify} messages.
         * @function encode
         * @memberof iris2.MsgUndelegate
         * @static
         * @param {iris2.IMsgUndelegate} message MsgUndelegate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgUndelegate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.DelegatorAddress);
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.ValidatorAddress);
            $root.iris2.Coin.encode(message.Amount, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified MsgUndelegate message, length delimited. Does not implicitly {@link iris2.MsgUndelegate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof iris2.MsgUndelegate
         * @static
         * @param {iris2.IMsgUndelegate} message MsgUndelegate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgUndelegate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MsgUndelegate message from the specified reader or buffer.
         * @function decode
         * @memberof iris2.MsgUndelegate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {iris2.MsgUndelegate} MsgUndelegate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgUndelegate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.iris2.MsgUndelegate();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.DelegatorAddress = reader.bytes();
                        break;
                    case 2:
                        message.ValidatorAddress = reader.bytes();
                        break;
                    case 3:
                        message.Amount = $root.iris2.Coin.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            if (!message.hasOwnProperty("DelegatorAddress"))
                throw $util.ProtocolError("missing required 'DelegatorAddress'", { instance: message });
            if (!message.hasOwnProperty("ValidatorAddress"))
                throw $util.ProtocolError("missing required 'ValidatorAddress'", { instance: message });
            if (!message.hasOwnProperty("Amount"))
                throw $util.ProtocolError("missing required 'Amount'", { instance: message });
            return message;
        };

        /**
         * Decodes a MsgUndelegate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof iris2.MsgUndelegate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {iris2.MsgUndelegate} MsgUndelegate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgUndelegate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MsgUndelegate message.
         * @function verify
         * @memberof iris2.MsgUndelegate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MsgUndelegate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!(message.DelegatorAddress && typeof message.DelegatorAddress.length === "number" || $util.isString(message.DelegatorAddress)))
                return "DelegatorAddress: buffer expected";
            if (!(message.ValidatorAddress && typeof message.ValidatorAddress.length === "number" || $util.isString(message.ValidatorAddress)))
                return "ValidatorAddress: buffer expected";
            {
                var error = $root.iris2.Coin.verify(message.Amount);
                if (error)
                    return "Amount." + error;
            }
            return null;
        };

        /**
         * Creates a MsgUndelegate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof iris2.MsgUndelegate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {iris2.MsgUndelegate} MsgUndelegate
         */
        MsgUndelegate.fromObject = function fromObject(object) {
            if (object instanceof $root.iris2.MsgUndelegate)
                return object;
            var message = new $root.iris2.MsgUndelegate();
            if (object.DelegatorAddress != null)
                if (typeof object.DelegatorAddress === "string")
                    $util.base64.decode(object.DelegatorAddress, message.DelegatorAddress = $util.newBuffer($util.base64.length(object.DelegatorAddress)), 0);
                else if (object.DelegatorAddress.length)
                    message.DelegatorAddress = object.DelegatorAddress;
            if (object.ValidatorAddress != null)
                if (typeof object.ValidatorAddress === "string")
                    $util.base64.decode(object.ValidatorAddress, message.ValidatorAddress = $util.newBuffer($util.base64.length(object.ValidatorAddress)), 0);
                else if (object.ValidatorAddress.length)
                    message.ValidatorAddress = object.ValidatorAddress;
            if (object.Amount != null) {
                if (typeof object.Amount !== "object")
                    throw TypeError(".iris2.MsgUndelegate.Amount: object expected");
                message.Amount = $root.iris2.Coin.fromObject(object.Amount);
            }
            return message;
        };

        /**
         * Creates a plain object from a MsgUndelegate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof iris2.MsgUndelegate
         * @static
         * @param {iris2.MsgUndelegate} message MsgUndelegate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MsgUndelegate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.DelegatorAddress = "";
                else {
                    object.DelegatorAddress = [];
                    if (options.bytes !== Array)
                        object.DelegatorAddress = $util.newBuffer(object.DelegatorAddress);
                }
                if (options.bytes === String)
                    object.ValidatorAddress = "";
                else {
                    object.ValidatorAddress = [];
                    if (options.bytes !== Array)
                        object.ValidatorAddress = $util.newBuffer(object.ValidatorAddress);
                }
                object.Amount = null;
            }
            if (message.DelegatorAddress != null && message.hasOwnProperty("DelegatorAddress"))
                object.DelegatorAddress = options.bytes === String ? $util.base64.encode(message.DelegatorAddress, 0, message.DelegatorAddress.length) : options.bytes === Array ? Array.prototype.slice.call(message.DelegatorAddress) : message.DelegatorAddress;
            if (message.ValidatorAddress != null && message.hasOwnProperty("ValidatorAddress"))
                object.ValidatorAddress = options.bytes === String ? $util.base64.encode(message.ValidatorAddress, 0, message.ValidatorAddress.length) : options.bytes === Array ? Array.prototype.slice.call(message.ValidatorAddress) : message.ValidatorAddress;
            if (message.Amount != null && message.hasOwnProperty("Amount"))
                object.Amount = $root.iris2.Coin.toObject(message.Amount, options);
            return object;
        };

        /**
         * Converts this MsgUndelegate to JSON.
         * @function toJSON
         * @memberof iris2.MsgUndelegate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MsgUndelegate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MsgUndelegate;
    })();

    iris2.MsgBeginRedelegate = (function () {

        /**
         * Properties of a MsgBeginRedelegate.
         * @memberof iris2
         * @interface IMsgBeginRedelegate
         * @property {Uint8Array} DelegatorAddress MsgBeginRedelegate DelegatorAddress
         * @property {Uint8Array} ValidatorSrcAddress MsgBeginRedelegate ValidatorSrcAddress
         * @property {Uint8Array} ValidatorDstAddress MsgBeginRedelegate ValidatorDstAddress
         * @property {iris2.ICoin} Amount MsgBeginRedelegate Amount
         */

        /**
         * Constructs a new MsgBeginRedelegate.
         * @memberof iris2
         * @classdesc Represents a MsgBeginRedelegate.
         * @implements IMsgBeginRedelegate
         * @constructor
         * @param {iris2.IMsgBeginRedelegate=} [properties] Properties to set
         */
        function MsgBeginRedelegate(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MsgBeginRedelegate DelegatorAddress.
         * @member {Uint8Array} DelegatorAddress
         * @memberof iris2.MsgBeginRedelegate
         * @instance
         */
        MsgBeginRedelegate.prototype.DelegatorAddress = $util.newBuffer([]);

        /**
         * MsgBeginRedelegate ValidatorSrcAddress.
         * @member {Uint8Array} ValidatorSrcAddress
         * @memberof iris2.MsgBeginRedelegate
         * @instance
         */
        MsgBeginRedelegate.prototype.ValidatorSrcAddress = $util.newBuffer([]);

        /**
         * MsgBeginRedelegate ValidatorDstAddress.
         * @member {Uint8Array} ValidatorDstAddress
         * @memberof iris2.MsgBeginRedelegate
         * @instance
         */
        MsgBeginRedelegate.prototype.ValidatorDstAddress = $util.newBuffer([]);

        /**
         * MsgBeginRedelegate Amount.
         * @member {iris2.ICoin} Amount
         * @memberof iris2.MsgBeginRedelegate
         * @instance
         */
        MsgBeginRedelegate.prototype.Amount = null;

        /**
         * Creates a new MsgBeginRedelegate instance using the specified properties.
         * @function create
         * @memberof iris2.MsgBeginRedelegate
         * @static
         * @param {iris2.IMsgBeginRedelegate=} [properties] Properties to set
         * @returns {iris2.MsgBeginRedelegate} MsgBeginRedelegate instance
         */
        MsgBeginRedelegate.create = function create(properties) {
            return new MsgBeginRedelegate(properties);
        };

        /**
         * Encodes the specified MsgBeginRedelegate message. Does not implicitly {@link iris2.MsgBeginRedelegate.verify|verify} messages.
         * @function encode
         * @memberof iris2.MsgBeginRedelegate
         * @static
         * @param {iris2.IMsgBeginRedelegate} message MsgBeginRedelegate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgBeginRedelegate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.DelegatorAddress);
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.ValidatorSrcAddress);
            writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.ValidatorDstAddress);
            $root.iris2.Coin.encode(message.Amount, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified MsgBeginRedelegate message, length delimited. Does not implicitly {@link iris2.MsgBeginRedelegate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof iris2.MsgBeginRedelegate
         * @static
         * @param {iris2.IMsgBeginRedelegate} message MsgBeginRedelegate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgBeginRedelegate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MsgBeginRedelegate message from the specified reader or buffer.
         * @function decode
         * @memberof iris2.MsgBeginRedelegate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {iris2.MsgBeginRedelegate} MsgBeginRedelegate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgBeginRedelegate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.iris2.MsgBeginRedelegate();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.DelegatorAddress = reader.bytes();
                        break;
                    case 2:
                        message.ValidatorSrcAddress = reader.bytes();
                        break;
                    case 3:
                        message.ValidatorDstAddress = reader.bytes();
                        break;
                    case 4:
                        message.Amount = $root.iris2.Coin.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            if (!message.hasOwnProperty("DelegatorAddress"))
                throw $util.ProtocolError("missing required 'DelegatorAddress'", { instance: message });
            if (!message.hasOwnProperty("ValidatorSrcAddress"))
                throw $util.ProtocolError("missing required 'ValidatorSrcAddress'", { instance: message });
            if (!message.hasOwnProperty("ValidatorDstAddress"))
                throw $util.ProtocolError("missing required 'ValidatorDstAddress'", { instance: message });
            if (!message.hasOwnProperty("Amount"))
                throw $util.ProtocolError("missing required 'Amount'", { instance: message });
            return message;
        };

        /**
         * Decodes a MsgBeginRedelegate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof iris2.MsgBeginRedelegate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {iris2.MsgBeginRedelegate} MsgBeginRedelegate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgBeginRedelegate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MsgBeginRedelegate message.
         * @function verify
         * @memberof iris2.MsgBeginRedelegate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MsgBeginRedelegate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!(message.DelegatorAddress && typeof message.DelegatorAddress.length === "number" || $util.isString(message.DelegatorAddress)))
                return "DelegatorAddress: buffer expected";
            if (!(message.ValidatorSrcAddress && typeof message.ValidatorSrcAddress.length === "number" || $util.isString(message.ValidatorSrcAddress)))
                return "ValidatorSrcAddress: buffer expected";
            if (!(message.ValidatorDstAddress && typeof message.ValidatorDstAddress.length === "number" || $util.isString(message.ValidatorDstAddress)))
                return "ValidatorDstAddress: buffer expected";
            {
                var error = $root.iris2.Coin.verify(message.Amount);
                if (error)
                    return "Amount." + error;
            }
            return null;
        };

        /**
         * Creates a MsgBeginRedelegate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof iris2.MsgBeginRedelegate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {iris2.MsgBeginRedelegate} MsgBeginRedelegate
         */
        MsgBeginRedelegate.fromObject = function fromObject(object) {
            if (object instanceof $root.iris2.MsgBeginRedelegate)
                return object;
            var message = new $root.iris2.MsgBeginRedelegate();
            if (object.DelegatorAddress != null)
                if (typeof object.DelegatorAddress === "string")
                    $util.base64.decode(object.DelegatorAddress, message.DelegatorAddress = $util.newBuffer($util.base64.length(object.DelegatorAddress)), 0);
                else if (object.DelegatorAddress.length)
                    message.DelegatorAddress = object.DelegatorAddress;
            if (object.ValidatorSrcAddress != null)
                if (typeof object.ValidatorSrcAddress === "string")
                    $util.base64.decode(object.ValidatorSrcAddress, message.ValidatorSrcAddress = $util.newBuffer($util.base64.length(object.ValidatorSrcAddress)), 0);
                else if (object.ValidatorSrcAddress.length)
                    message.ValidatorSrcAddress = object.ValidatorSrcAddress;
            if (object.ValidatorDstAddress != null)
                if (typeof object.ValidatorDstAddress === "string")
                    $util.base64.decode(object.ValidatorDstAddress, message.ValidatorDstAddress = $util.newBuffer($util.base64.length(object.ValidatorDstAddress)), 0);
                else if (object.ValidatorDstAddress.length)
                    message.ValidatorDstAddress = object.ValidatorDstAddress;
            if (object.Amount != null) {
                if (typeof object.Amount !== "object")
                    throw TypeError(".iris2.MsgBeginRedelegate.Amount: object expected");
                message.Amount = $root.iris2.Coin.fromObject(object.Amount);
            }
            return message;
        };

        /**
         * Creates a plain object from a MsgBeginRedelegate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof iris2.MsgBeginRedelegate
         * @static
         * @param {iris2.MsgBeginRedelegate} message MsgBeginRedelegate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MsgBeginRedelegate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.DelegatorAddress = "";
                else {
                    object.DelegatorAddress = [];
                    if (options.bytes !== Array)
                        object.DelegatorAddress = $util.newBuffer(object.DelegatorAddress);
                }
                if (options.bytes === String)
                    object.ValidatorSrcAddress = "";
                else {
                    object.ValidatorSrcAddress = [];
                    if (options.bytes !== Array)
                        object.ValidatorSrcAddress = $util.newBuffer(object.ValidatorSrcAddress);
                }
                if (options.bytes === String)
                    object.ValidatorDstAddress = "";
                else {
                    object.ValidatorDstAddress = [];
                    if (options.bytes !== Array)
                        object.ValidatorDstAddress = $util.newBuffer(object.ValidatorDstAddress);
                }
                object.Amount = null;
            }
            if (message.DelegatorAddress != null && message.hasOwnProperty("DelegatorAddress"))
                object.DelegatorAddress = options.bytes === String ? $util.base64.encode(message.DelegatorAddress, 0, message.DelegatorAddress.length) : options.bytes === Array ? Array.prototype.slice.call(message.DelegatorAddress) : message.DelegatorAddress;
            if (message.ValidatorSrcAddress != null && message.hasOwnProperty("ValidatorSrcAddress"))
                object.ValidatorSrcAddress = options.bytes === String ? $util.base64.encode(message.ValidatorSrcAddress, 0, message.ValidatorSrcAddress.length) : options.bytes === Array ? Array.prototype.slice.call(message.ValidatorSrcAddress) : message.ValidatorSrcAddress;
            if (message.ValidatorDstAddress != null && message.hasOwnProperty("ValidatorDstAddress"))
                object.ValidatorDstAddress = options.bytes === String ? $util.base64.encode(message.ValidatorDstAddress, 0, message.ValidatorDstAddress.length) : options.bytes === Array ? Array.prototype.slice.call(message.ValidatorDstAddress) : message.ValidatorDstAddress;
            if (message.Amount != null && message.hasOwnProperty("Amount"))
                object.Amount = $root.iris2.Coin.toObject(message.Amount, options);
            return object;
        };

        /**
         * Converts this MsgBeginRedelegate to JSON.
         * @function toJSON
         * @memberof iris2.MsgBeginRedelegate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MsgBeginRedelegate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MsgBeginRedelegate;
    })();

    iris2.MsgSetWithdrawAddress = (function () {

        /**
         * Properties of a MsgSetWithdrawAddress.
         * @memberof iris2
         * @interface IMsgSetWithdrawAddress
         * @property {Uint8Array} DelegatorAddress MsgSetWithdrawAddress DelegatorAddress
         * @property {Uint8Array} WithdrawAddress MsgSetWithdrawAddress WithdrawAddress
         */

        /**
         * Constructs a new MsgSetWithdrawAddress.
         * @memberof iris2
         * @classdesc Represents a MsgSetWithdrawAddress.
         * @implements IMsgSetWithdrawAddress
         * @constructor
         * @param {iris2.IMsgSetWithdrawAddress=} [properties] Properties to set
         */
        function MsgSetWithdrawAddress(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MsgSetWithdrawAddress DelegatorAddress.
         * @member {Uint8Array} DelegatorAddress
         * @memberof iris2.MsgSetWithdrawAddress
         * @instance
         */
        MsgSetWithdrawAddress.prototype.DelegatorAddress = $util.newBuffer([]);

        /**
         * MsgSetWithdrawAddress WithdrawAddress.
         * @member {Uint8Array} WithdrawAddress
         * @memberof iris2.MsgSetWithdrawAddress
         * @instance
         */
        MsgSetWithdrawAddress.prototype.WithdrawAddress = $util.newBuffer([]);

        /**
         * Creates a new MsgSetWithdrawAddress instance using the specified properties.
         * @function create
         * @memberof iris2.MsgSetWithdrawAddress
         * @static
         * @param {iris2.IMsgSetWithdrawAddress=} [properties] Properties to set
         * @returns {iris2.MsgSetWithdrawAddress} MsgSetWithdrawAddress instance
         */
        MsgSetWithdrawAddress.create = function create(properties) {
            return new MsgSetWithdrawAddress(properties);
        };

        /**
         * Encodes the specified MsgSetWithdrawAddress message. Does not implicitly {@link iris2.MsgSetWithdrawAddress.verify|verify} messages.
         * @function encode
         * @memberof iris2.MsgSetWithdrawAddress
         * @static
         * @param {iris2.IMsgSetWithdrawAddress} message MsgSetWithdrawAddress message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgSetWithdrawAddress.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.DelegatorAddress);
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.WithdrawAddress);
            return writer;
        };

        /**
         * Encodes the specified MsgSetWithdrawAddress message, length delimited. Does not implicitly {@link iris2.MsgSetWithdrawAddress.verify|verify} messages.
         * @function encodeDelimited
         * @memberof iris2.MsgSetWithdrawAddress
         * @static
         * @param {iris2.IMsgSetWithdrawAddress} message MsgSetWithdrawAddress message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgSetWithdrawAddress.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MsgSetWithdrawAddress message from the specified reader or buffer.
         * @function decode
         * @memberof iris2.MsgSetWithdrawAddress
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {iris2.MsgSetWithdrawAddress} MsgSetWithdrawAddress
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgSetWithdrawAddress.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.iris2.MsgSetWithdrawAddress();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.DelegatorAddress = reader.bytes();
                        break;
                    case 2:
                        message.WithdrawAddress = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            if (!message.hasOwnProperty("DelegatorAddress"))
                throw $util.ProtocolError("missing required 'DelegatorAddress'", { instance: message });
            if (!message.hasOwnProperty("WithdrawAddress"))
                throw $util.ProtocolError("missing required 'WithdrawAddress'", { instance: message });
            return message;
        };

        /**
         * Decodes a MsgSetWithdrawAddress message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof iris2.MsgSetWithdrawAddress
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {iris2.MsgSetWithdrawAddress} MsgSetWithdrawAddress
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgSetWithdrawAddress.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MsgSetWithdrawAddress message.
         * @function verify
         * @memberof iris2.MsgSetWithdrawAddress
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MsgSetWithdrawAddress.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!(message.DelegatorAddress && typeof message.DelegatorAddress.length === "number" || $util.isString(message.DelegatorAddress)))
                return "DelegatorAddress: buffer expected";
            if (!(message.WithdrawAddress && typeof message.WithdrawAddress.length === "number" || $util.isString(message.WithdrawAddress)))
                return "WithdrawAddress: buffer expected";
            return null;
        };

        /**
         * Creates a MsgSetWithdrawAddress message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof iris2.MsgSetWithdrawAddress
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {iris2.MsgSetWithdrawAddress} MsgSetWithdrawAddress
         */
        MsgSetWithdrawAddress.fromObject = function fromObject(object) {
            if (object instanceof $root.iris2.MsgSetWithdrawAddress)
                return object;
            var message = new $root.iris2.MsgSetWithdrawAddress();
            if (object.DelegatorAddress != null)
                if (typeof object.DelegatorAddress === "string")
                    $util.base64.decode(object.DelegatorAddress, message.DelegatorAddress = $util.newBuffer($util.base64.length(object.DelegatorAddress)), 0);
                else if (object.DelegatorAddress.length)
                    message.DelegatorAddress = object.DelegatorAddress;
            if (object.WithdrawAddress != null)
                if (typeof object.WithdrawAddress === "string")
                    $util.base64.decode(object.WithdrawAddress, message.WithdrawAddress = $util.newBuffer($util.base64.length(object.WithdrawAddress)), 0);
                else if (object.WithdrawAddress.length)
                    message.WithdrawAddress = object.WithdrawAddress;
            return message;
        };

        /**
         * Creates a plain object from a MsgSetWithdrawAddress message. Also converts values to other types if specified.
         * @function toObject
         * @memberof iris2.MsgSetWithdrawAddress
         * @static
         * @param {iris2.MsgSetWithdrawAddress} message MsgSetWithdrawAddress
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MsgSetWithdrawAddress.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.DelegatorAddress = "";
                else {
                    object.DelegatorAddress = [];
                    if (options.bytes !== Array)
                        object.DelegatorAddress = $util.newBuffer(object.DelegatorAddress);
                }
                if (options.bytes === String)
                    object.WithdrawAddress = "";
                else {
                    object.WithdrawAddress = [];
                    if (options.bytes !== Array)
                        object.WithdrawAddress = $util.newBuffer(object.WithdrawAddress);
                }
            }
            if (message.DelegatorAddress != null && message.hasOwnProperty("DelegatorAddress"))
                object.DelegatorAddress = options.bytes === String ? $util.base64.encode(message.DelegatorAddress, 0, message.DelegatorAddress.length) : options.bytes === Array ? Array.prototype.slice.call(message.DelegatorAddress) : message.DelegatorAddress;
            if (message.WithdrawAddress != null && message.hasOwnProperty("WithdrawAddress"))
                object.WithdrawAddress = options.bytes === String ? $util.base64.encode(message.WithdrawAddress, 0, message.WithdrawAddress.length) : options.bytes === Array ? Array.prototype.slice.call(message.WithdrawAddress) : message.WithdrawAddress;
            return object;
        };

        /**
         * Converts this MsgSetWithdrawAddress to JSON.
         * @function toJSON
         * @memberof iris2.MsgSetWithdrawAddress
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MsgSetWithdrawAddress.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MsgSetWithdrawAddress;
    })();

    iris2.MsgWithdrawDelegatorReward = (function () {

        /**
         * Properties of a MsgWithdrawDelegatorReward.
         * @memberof iris2
         * @interface IMsgWithdrawDelegatorReward
         * @property {Uint8Array} DelegatorAddress MsgWithdrawDelegatorReward DelegatorAddress
         * @property {Uint8Array} ValidatorAddress MsgWithdrawDelegatorReward ValidatorAddress
         */

        /**
         * Constructs a new MsgWithdrawDelegatorReward.
         * @memberof iris2
         * @classdesc Represents a MsgWithdrawDelegatorReward.
         * @implements IMsgWithdrawDelegatorReward
         * @constructor
         * @param {iris2.IMsgWithdrawDelegatorReward=} [properties] Properties to set
         */
        function MsgWithdrawDelegatorReward(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MsgWithdrawDelegatorReward DelegatorAddress.
         * @member {Uint8Array} DelegatorAddress
         * @memberof iris2.MsgWithdrawDelegatorReward
         * @instance
         */
        MsgWithdrawDelegatorReward.prototype.DelegatorAddress = $util.newBuffer([]);

        /**
         * MsgWithdrawDelegatorReward ValidatorAddress.
         * @member {Uint8Array} ValidatorAddress
         * @memberof iris2.MsgWithdrawDelegatorReward
         * @instance
         */
        MsgWithdrawDelegatorReward.prototype.ValidatorAddress = $util.newBuffer([]);

        /**
         * Creates a new MsgWithdrawDelegatorReward instance using the specified properties.
         * @function create
         * @memberof iris2.MsgWithdrawDelegatorReward
         * @static
         * @param {iris2.IMsgWithdrawDelegatorReward=} [properties] Properties to set
         * @returns {iris2.MsgWithdrawDelegatorReward} MsgWithdrawDelegatorReward instance
         */
        MsgWithdrawDelegatorReward.create = function create(properties) {
            return new MsgWithdrawDelegatorReward(properties);
        };

        /**
         * Encodes the specified MsgWithdrawDelegatorReward message. Does not implicitly {@link iris2.MsgWithdrawDelegatorReward.verify|verify} messages.
         * @function encode
         * @memberof iris2.MsgWithdrawDelegatorReward
         * @static
         * @param {iris2.IMsgWithdrawDelegatorReward} message MsgWithdrawDelegatorReward message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgWithdrawDelegatorReward.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.DelegatorAddress);
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.ValidatorAddress);
            return writer;
        };

        /**
         * Encodes the specified MsgWithdrawDelegatorReward message, length delimited. Does not implicitly {@link iris2.MsgWithdrawDelegatorReward.verify|verify} messages.
         * @function encodeDelimited
         * @memberof iris2.MsgWithdrawDelegatorReward
         * @static
         * @param {iris2.IMsgWithdrawDelegatorReward} message MsgWithdrawDelegatorReward message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgWithdrawDelegatorReward.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MsgWithdrawDelegatorReward message from the specified reader or buffer.
         * @function decode
         * @memberof iris2.MsgWithdrawDelegatorReward
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {iris2.MsgWithdrawDelegatorReward} MsgWithdrawDelegatorReward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgWithdrawDelegatorReward.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.iris2.MsgWithdrawDelegatorReward();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.DelegatorAddress = reader.bytes();
                        break;
                    case 2:
                        message.ValidatorAddress = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            if (!message.hasOwnProperty("DelegatorAddress"))
                throw $util.ProtocolError("missing required 'DelegatorAddress'", { instance: message });
            if (!message.hasOwnProperty("ValidatorAddress"))
                throw $util.ProtocolError("missing required 'ValidatorAddress'", { instance: message });
            return message;
        };

        /**
         * Decodes a MsgWithdrawDelegatorReward message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof iris2.MsgWithdrawDelegatorReward
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {iris2.MsgWithdrawDelegatorReward} MsgWithdrawDelegatorReward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgWithdrawDelegatorReward.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MsgWithdrawDelegatorReward message.
         * @function verify
         * @memberof iris2.MsgWithdrawDelegatorReward
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MsgWithdrawDelegatorReward.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!(message.DelegatorAddress && typeof message.DelegatorAddress.length === "number" || $util.isString(message.DelegatorAddress)))
                return "DelegatorAddress: buffer expected";
            if (!(message.ValidatorAddress && typeof message.ValidatorAddress.length === "number" || $util.isString(message.ValidatorAddress)))
                return "ValidatorAddress: buffer expected";
            return null;
        };

        /**
         * Creates a MsgWithdrawDelegatorReward message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof iris2.MsgWithdrawDelegatorReward
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {iris2.MsgWithdrawDelegatorReward} MsgWithdrawDelegatorReward
         */
        MsgWithdrawDelegatorReward.fromObject = function fromObject(object) {
            if (object instanceof $root.iris2.MsgWithdrawDelegatorReward)
                return object;
            var message = new $root.iris2.MsgWithdrawDelegatorReward();
            if (object.DelegatorAddress != null)
                if (typeof object.DelegatorAddress === "string")
                    $util.base64.decode(object.DelegatorAddress, message.DelegatorAddress = $util.newBuffer($util.base64.length(object.DelegatorAddress)), 0);
                else if (object.DelegatorAddress.length)
                    message.DelegatorAddress = object.DelegatorAddress;
            if (object.ValidatorAddress != null)
                if (typeof object.ValidatorAddress === "string")
                    $util.base64.decode(object.ValidatorAddress, message.ValidatorAddress = $util.newBuffer($util.base64.length(object.ValidatorAddress)), 0);
                else if (object.ValidatorAddress.length)
                    message.ValidatorAddress = object.ValidatorAddress;
            return message;
        };

        /**
         * Creates a plain object from a MsgWithdrawDelegatorReward message. Also converts values to other types if specified.
         * @function toObject
         * @memberof iris2.MsgWithdrawDelegatorReward
         * @static
         * @param {iris2.MsgWithdrawDelegatorReward} message MsgWithdrawDelegatorReward
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MsgWithdrawDelegatorReward.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.DelegatorAddress = "";
                else {
                    object.DelegatorAddress = [];
                    if (options.bytes !== Array)
                        object.DelegatorAddress = $util.newBuffer(object.DelegatorAddress);
                }
                if (options.bytes === String)
                    object.ValidatorAddress = "";
                else {
                    object.ValidatorAddress = [];
                    if (options.bytes !== Array)
                        object.ValidatorAddress = $util.newBuffer(object.ValidatorAddress);
                }
            }
            if (message.DelegatorAddress != null && message.hasOwnProperty("DelegatorAddress"))
                object.DelegatorAddress = options.bytes === String ? $util.base64.encode(message.DelegatorAddress, 0, message.DelegatorAddress.length) : options.bytes === Array ? Array.prototype.slice.call(message.DelegatorAddress) : message.DelegatorAddress;
            if (message.ValidatorAddress != null && message.hasOwnProperty("ValidatorAddress"))
                object.ValidatorAddress = options.bytes === String ? $util.base64.encode(message.ValidatorAddress, 0, message.ValidatorAddress.length) : options.bytes === Array ? Array.prototype.slice.call(message.ValidatorAddress) : message.ValidatorAddress;
            return object;
        };

        /**
         * Converts this MsgWithdrawDelegatorReward to JSON.
         * @function toJSON
         * @memberof iris2.MsgWithdrawDelegatorReward
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MsgWithdrawDelegatorReward.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MsgWithdrawDelegatorReward;
    })();

    iris2.MsgWithdrawValidatorCommission = (function () {

        /**
         * Properties of a MsgWithdrawValidatorCommission.
         * @memberof iris2
         * @interface IMsgWithdrawValidatorCommission
         * @property {Uint8Array} ValidatorAddress MsgWithdrawValidatorCommission ValidatorAddress
         */

        /**
         * Constructs a new MsgWithdrawValidatorCommission.
         * @memberof iris2
         * @classdesc Represents a MsgWithdrawValidatorCommission.
         * @implements IMsgWithdrawValidatorCommission
         * @constructor
         * @param {iris2.IMsgWithdrawValidatorCommission=} [properties] Properties to set
         */
        function MsgWithdrawValidatorCommission(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MsgWithdrawValidatorCommission ValidatorAddress.
         * @member {Uint8Array} ValidatorAddress
         * @memberof iris2.MsgWithdrawValidatorCommission
         * @instance
         */
        MsgWithdrawValidatorCommission.prototype.ValidatorAddress = $util.newBuffer([]);

        /**
         * Creates a new MsgWithdrawValidatorCommission instance using the specified properties.
         * @function create
         * @memberof iris2.MsgWithdrawValidatorCommission
         * @static
         * @param {iris2.IMsgWithdrawValidatorCommission=} [properties] Properties to set
         * @returns {iris2.MsgWithdrawValidatorCommission} MsgWithdrawValidatorCommission instance
         */
        MsgWithdrawValidatorCommission.create = function create(properties) {
            return new MsgWithdrawValidatorCommission(properties);
        };

        /**
         * Encodes the specified MsgWithdrawValidatorCommission message. Does not implicitly {@link iris2.MsgWithdrawValidatorCommission.verify|verify} messages.
         * @function encode
         * @memberof iris2.MsgWithdrawValidatorCommission
         * @static
         * @param {iris2.IMsgWithdrawValidatorCommission} message MsgWithdrawValidatorCommission message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgWithdrawValidatorCommission.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.ValidatorAddress);
            return writer;
        };

        /**
         * Encodes the specified MsgWithdrawValidatorCommission message, length delimited. Does not implicitly {@link iris2.MsgWithdrawValidatorCommission.verify|verify} messages.
         * @function encodeDelimited
         * @memberof iris2.MsgWithdrawValidatorCommission
         * @static
         * @param {iris2.IMsgWithdrawValidatorCommission} message MsgWithdrawValidatorCommission message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgWithdrawValidatorCommission.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MsgWithdrawValidatorCommission message from the specified reader or buffer.
         * @function decode
         * @memberof iris2.MsgWithdrawValidatorCommission
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {iris2.MsgWithdrawValidatorCommission} MsgWithdrawValidatorCommission
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgWithdrawValidatorCommission.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.iris2.MsgWithdrawValidatorCommission();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.ValidatorAddress = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            if (!message.hasOwnProperty("ValidatorAddress"))
                throw $util.ProtocolError("missing required 'ValidatorAddress'", { instance: message });
            return message;
        };

        /**
         * Decodes a MsgWithdrawValidatorCommission message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof iris2.MsgWithdrawValidatorCommission
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {iris2.MsgWithdrawValidatorCommission} MsgWithdrawValidatorCommission
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgWithdrawValidatorCommission.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MsgWithdrawValidatorCommission message.
         * @function verify
         * @memberof iris2.MsgWithdrawValidatorCommission
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MsgWithdrawValidatorCommission.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!(message.ValidatorAddress && typeof message.ValidatorAddress.length === "number" || $util.isString(message.ValidatorAddress)))
                return "ValidatorAddress: buffer expected";
            return null;
        };

        /**
         * Creates a MsgWithdrawValidatorCommission message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof iris2.MsgWithdrawValidatorCommission
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {iris2.MsgWithdrawValidatorCommission} MsgWithdrawValidatorCommission
         */
        MsgWithdrawValidatorCommission.fromObject = function fromObject(object) {
            if (object instanceof $root.iris2.MsgWithdrawValidatorCommission)
                return object;
            var message = new $root.iris2.MsgWithdrawValidatorCommission();
            if (object.ValidatorAddress != null)
                if (typeof object.ValidatorAddress === "string")
                    $util.base64.decode(object.ValidatorAddress, message.ValidatorAddress = $util.newBuffer($util.base64.length(object.ValidatorAddress)), 0);
                else if (object.ValidatorAddress.length)
                    message.ValidatorAddress = object.ValidatorAddress;
            return message;
        };

        /**
         * Creates a plain object from a MsgWithdrawValidatorCommission message. Also converts values to other types if specified.
         * @function toObject
         * @memberof iris2.MsgWithdrawValidatorCommission
         * @static
         * @param {iris2.MsgWithdrawValidatorCommission} message MsgWithdrawValidatorCommission
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MsgWithdrawValidatorCommission.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if (options.bytes === String)
                    object.ValidatorAddress = "";
                else {
                    object.ValidatorAddress = [];
                    if (options.bytes !== Array)
                        object.ValidatorAddress = $util.newBuffer(object.ValidatorAddress);
                }
            if (message.ValidatorAddress != null && message.hasOwnProperty("ValidatorAddress"))
                object.ValidatorAddress = options.bytes === String ? $util.base64.encode(message.ValidatorAddress, 0, message.ValidatorAddress.length) : options.bytes === Array ? Array.prototype.slice.call(message.ValidatorAddress) : message.ValidatorAddress;
            return object;
        };

        /**
         * Converts this MsgWithdrawValidatorCommission to JSON.
         * @function toJSON
         * @memberof iris2.MsgWithdrawValidatorCommission
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MsgWithdrawValidatorCommission.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MsgWithdrawValidatorCommission;
    })();

    iris2.StdFee = (function () {

        /**
         * Properties of a StdFee.
         * @memberof iris2
         * @interface IStdFee
         * @property {Array.<iris2.ICoin>|null} [amount] StdFee amount
         * @property {number|Long} gas StdFee gas
         */

        /**
         * Constructs a new StdFee.
         * @memberof iris2
         * @classdesc Represents a StdFee.
         * @implements IStdFee
         * @constructor
         * @param {iris2.IStdFee=} [properties] Properties to set
         */
        function StdFee(properties) {
            this.amount = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StdFee amount.
         * @member {Array.<iris2.ICoin>} amount
         * @memberof iris2.StdFee
         * @instance
         */
        StdFee.prototype.amount = $util.emptyArray;

        /**
         * StdFee gas.
         * @member {number|Long} gas
         * @memberof iris2.StdFee
         * @instance
         */
        StdFee.prototype.gas = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * Creates a new StdFee instance using the specified properties.
         * @function create
         * @memberof iris2.StdFee
         * @static
         * @param {iris2.IStdFee=} [properties] Properties to set
         * @returns {iris2.StdFee} StdFee instance
         */
        StdFee.create = function create(properties) {
            return new StdFee(properties);
        };

        /**
         * Encodes the specified StdFee message. Does not implicitly {@link iris2.StdFee.verify|verify} messages.
         * @function encode
         * @memberof iris2.StdFee
         * @static
         * @param {iris2.IStdFee} message StdFee message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StdFee.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.amount != null && message.amount.length)
                for (var i = 0; i < message.amount.length; ++i)
                    $root.iris2.Coin.encode(message.amount[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.gas);
            return writer;
        };

        /**
         * Encodes the specified StdFee message, length delimited. Does not implicitly {@link iris2.StdFee.verify|verify} messages.
         * @function encodeDelimited
         * @memberof iris2.StdFee
         * @static
         * @param {iris2.IStdFee} message StdFee message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StdFee.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StdFee message from the specified reader or buffer.
         * @function decode
         * @memberof iris2.StdFee
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {iris2.StdFee} StdFee
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StdFee.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.iris2.StdFee();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        if (!(message.amount && message.amount.length))
                            message.amount = [];
                        message.amount.push($root.iris2.Coin.decode(reader, reader.uint32()));
                        break;
                    case 2:
                        message.gas = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            if (!message.hasOwnProperty("gas"))
                throw $util.ProtocolError("missing required 'gas'", { instance: message });
            return message;
        };

        /**
         * Decodes a StdFee message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof iris2.StdFee
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {iris2.StdFee} StdFee
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StdFee.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StdFee message.
         * @function verify
         * @memberof iris2.StdFee
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StdFee.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.amount != null && message.hasOwnProperty("amount")) {
                if (!Array.isArray(message.amount))
                    return "amount: array expected";
                for (var i = 0; i < message.amount.length; ++i) {
                    var error = $root.iris2.Coin.verify(message.amount[i]);
                    if (error)
                        return "amount." + error;
                }
            }
            if (!$util.isInteger(message.gas) && !(message.gas && $util.isInteger(message.gas.low) && $util.isInteger(message.gas.high)))
                return "gas: integer|Long expected";
            return null;
        };

        /**
         * Creates a StdFee message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof iris2.StdFee
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {iris2.StdFee} StdFee
         */
        StdFee.fromObject = function fromObject(object) {
            if (object instanceof $root.iris2.StdFee)
                return object;
            var message = new $root.iris2.StdFee();
            if (object.amount) {
                if (!Array.isArray(object.amount))
                    throw TypeError(".iris2.StdFee.amount: array expected");
                message.amount = [];
                for (var i = 0; i < object.amount.length; ++i) {
                    if (typeof object.amount[i] !== "object")
                        throw TypeError(".iris2.StdFee.amount: object expected");
                    message.amount[i] = $root.iris2.Coin.fromObject(object.amount[i]);
                }
            }
            if (object.gas != null)
                if ($util.Long)
                    (message.gas = $util.Long.fromValue(object.gas)).unsigned = false;
                else if (typeof object.gas === "string")
                    message.gas = parseInt(object.gas, 10);
                else if (typeof object.gas === "number")
                    message.gas = object.gas;
                else if (typeof object.gas === "object")
                    message.gas = new $util.LongBits(object.gas.low >>> 0, object.gas.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a StdFee message. Also converts values to other types if specified.
         * @function toObject
         * @memberof iris2.StdFee
         * @static
         * @param {iris2.StdFee} message StdFee
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StdFee.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.amount = [];
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.gas = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.gas = options.longs === String ? "0" : 0;
            if (message.amount && message.amount.length) {
                object.amount = [];
                for (var j = 0; j < message.amount.length; ++j)
                    object.amount[j] = $root.iris2.Coin.toObject(message.amount[j], options);
            }
            if (message.gas != null && message.hasOwnProperty("gas"))
                if (typeof message.gas === "number")
                    object.gas = options.longs === String ? String(message.gas) : message.gas;
                else
                    object.gas = options.longs === String ? $util.Long.prototype.toString.call(message.gas) : options.longs === Number ? new $util.LongBits(message.gas.low >>> 0, message.gas.high >>> 0).toNumber() : message.gas;
            return object;
        };

        /**
         * Converts this StdFee to JSON.
         * @function toJSON
         * @memberof iris2.StdFee
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StdFee.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return StdFee;
    })();

    iris2.StdSignature = (function () {

        /**
         * Properties of a StdSignature.
         * @memberof iris2
         * @interface IStdSignature
         * @property {Uint8Array} pubKey StdSignature pubKey
         * @property {Uint8Array} signature StdSignature signature
         */

        /**
         * Constructs a new StdSignature.
         * @memberof iris2
         * @classdesc Represents a StdSignature.
         * @implements IStdSignature
         * @constructor
         * @param {iris2.IStdSignature=} [properties] Properties to set
         */
        function StdSignature(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StdSignature pubKey.
         * @member {Uint8Array} pubKey
         * @memberof iris2.StdSignature
         * @instance
         */
        StdSignature.prototype.pubKey = $util.newBuffer([]);

        /**
         * StdSignature signature.
         * @member {Uint8Array} signature
         * @memberof iris2.StdSignature
         * @instance
         */
        StdSignature.prototype.signature = $util.newBuffer([]);

        /**
         * Creates a new StdSignature instance using the specified properties.
         * @function create
         * @memberof iris2.StdSignature
         * @static
         * @param {iris2.IStdSignature=} [properties] Properties to set
         * @returns {iris2.StdSignature} StdSignature instance
         */
        StdSignature.create = function create(properties) {
            return new StdSignature(properties);
        };

        /**
         * Encodes the specified StdSignature message. Does not implicitly {@link iris2.StdSignature.verify|verify} messages.
         * @function encode
         * @memberof iris2.StdSignature
         * @static
         * @param {iris2.IStdSignature} message StdSignature message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StdSignature.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.pubKey);
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.signature);
            return writer;
        };

        /**
         * Encodes the specified StdSignature message, length delimited. Does not implicitly {@link iris2.StdSignature.verify|verify} messages.
         * @function encodeDelimited
         * @memberof iris2.StdSignature
         * @static
         * @param {iris2.IStdSignature} message StdSignature message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StdSignature.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StdSignature message from the specified reader or buffer.
         * @function decode
         * @memberof iris2.StdSignature
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {iris2.StdSignature} StdSignature
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StdSignature.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.iris2.StdSignature();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.pubKey = reader.bytes();
                        break;
                    case 2:
                        message.signature = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            if (!message.hasOwnProperty("pubKey"))
                throw $util.ProtocolError("missing required 'pubKey'", { instance: message });
            if (!message.hasOwnProperty("signature"))
                throw $util.ProtocolError("missing required 'signature'", { instance: message });
            return message;
        };

        /**
         * Decodes a StdSignature message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof iris2.StdSignature
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {iris2.StdSignature} StdSignature
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StdSignature.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StdSignature message.
         * @function verify
         * @memberof iris2.StdSignature
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StdSignature.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!(message.pubKey && typeof message.pubKey.length === "number" || $util.isString(message.pubKey)))
                return "pubKey: buffer expected";
            if (!(message.signature && typeof message.signature.length === "number" || $util.isString(message.signature)))
                return "signature: buffer expected";
            return null;
        };

        /**
         * Creates a StdSignature message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof iris2.StdSignature
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {iris2.StdSignature} StdSignature
         */
        StdSignature.fromObject = function fromObject(object) {
            if (object instanceof $root.iris2.StdSignature)
                return object;
            var message = new $root.iris2.StdSignature();
            if (object.pubKey != null)
                if (typeof object.pubKey === "string")
                    $util.base64.decode(object.pubKey, message.pubKey = $util.newBuffer($util.base64.length(object.pubKey)), 0);
                else if (object.pubKey.length)
                    message.pubKey = object.pubKey;
            if (object.signature != null)
                if (typeof object.signature === "string")
                    $util.base64.decode(object.signature, message.signature = $util.newBuffer($util.base64.length(object.signature)), 0);
                else if (object.signature.length)
                    message.signature = object.signature;
            return message;
        };

        /**
         * Creates a plain object from a StdSignature message. Also converts values to other types if specified.
         * @function toObject
         * @memberof iris2.StdSignature
         * @static
         * @param {iris2.StdSignature} message StdSignature
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StdSignature.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.pubKey = "";
                else {
                    object.pubKey = [];
                    if (options.bytes !== Array)
                        object.pubKey = $util.newBuffer(object.pubKey);
                }
                if (options.bytes === String)
                    object.signature = "";
                else {
                    object.signature = [];
                    if (options.bytes !== Array)
                        object.signature = $util.newBuffer(object.signature);
                }
            }
            if (message.pubKey != null && message.hasOwnProperty("pubKey"))
                object.pubKey = options.bytes === String ? $util.base64.encode(message.pubKey, 0, message.pubKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.pubKey) : message.pubKey;
            if (message.signature != null && message.hasOwnProperty("signature"))
                object.signature = options.bytes === String ? $util.base64.encode(message.signature, 0, message.signature.length) : options.bytes === Array ? Array.prototype.slice.call(message.signature) : message.signature;
            return object;
        };

        /**
         * Converts this StdSignature to JSON.
         * @function toJSON
         * @memberof iris2.StdSignature
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StdSignature.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return StdSignature;
    })();

    iris2.StdTx = (function () {

        /**
         * Properties of a StdTx.
         * @memberof iris2
         * @interface IStdTx
         * @property {Array.<Uint8Array>|null} [msg] StdTx msg
         * @property {iris2.IStdFee} fee StdTx fee
         * @property {Array.<iris2.IStdSignature>|null} [signatures] StdTx signatures
         * @property {string|null} [memo] StdTx memo
         */

        /**
         * Constructs a new StdTx.
         * @memberof iris2
         * @classdesc Represents a StdTx.
         * @implements IStdTx
         * @constructor
         * @param {iris2.IStdTx=} [properties] Properties to set
         */
        function StdTx(properties) {
            this.msg = [];
            this.signatures = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StdTx msg.
         * @member {Array.<Uint8Array>} msg
         * @memberof iris2.StdTx
         * @instance
         */
        StdTx.prototype.msg = $util.emptyArray;

        /**
         * StdTx fee.
         * @member {iris2.IStdFee} fee
         * @memberof iris2.StdTx
         * @instance
         */
        StdTx.prototype.fee = null;

        /**
         * StdTx signatures.
         * @member {Array.<iris2.IStdSignature>} signatures
         * @memberof iris2.StdTx
         * @instance
         */
        StdTx.prototype.signatures = $util.emptyArray;

        /**
         * StdTx memo.
         * @member {string} memo
         * @memberof iris2.StdTx
         * @instance
         */
        StdTx.prototype.memo = "";

        /**
         * Creates a new StdTx instance using the specified properties.
         * @function create
         * @memberof iris2.StdTx
         * @static
         * @param {iris2.IStdTx=} [properties] Properties to set
         * @returns {iris2.StdTx} StdTx instance
         */
        StdTx.create = function create(properties) {
            return new StdTx(properties);
        };

        /**
         * Encodes the specified StdTx message. Does not implicitly {@link iris2.StdTx.verify|verify} messages.
         * @function encode
         * @memberof iris2.StdTx
         * @static
         * @param {iris2.IStdTx} message StdTx message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StdTx.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.msg != null && message.msg.length)
                for (var i = 0; i < message.msg.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.msg[i]);
            $root.iris2.StdFee.encode(message.fee, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.signatures != null && message.signatures.length)
                for (var i = 0; i < message.signatures.length; ++i)
                    $root.iris2.StdSignature.encode(message.signatures[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.memo != null && message.hasOwnProperty("memo") && message.memo !== "")
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.memo);
            return writer;
        };

        /**
         * Encodes the specified StdTx message, length delimited. Does not implicitly {@link iris2.StdTx.verify|verify} messages.
         * @function encodeDelimited
         * @memberof iris2.StdTx
         * @static
         * @param {iris2.IStdTx} message StdTx message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StdTx.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StdTx message from the specified reader or buffer.
         * @function decode
         * @memberof iris2.StdTx
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {iris2.StdTx} StdTx
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StdTx.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.iris2.StdTx();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        if (!(message.msg && message.msg.length))
                            message.msg = [];
                        message.msg.push(reader.bytes());
                        break;
                    case 2:
                        message.fee = $root.iris2.StdFee.decode(reader, reader.uint32());
                        break;
                    case 3:
                        if (!(message.signatures && message.signatures.length))
                            message.signatures = [];
                        message.signatures.push($root.iris2.StdSignature.decode(reader, reader.uint32()));
                        break;
                    case 4:
                        message.memo = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            if (!message.hasOwnProperty("fee"))
                throw $util.ProtocolError("missing required 'fee'", { instance: message });
            return message;
        };

        /**
         * Decodes a StdTx message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof iris2.StdTx
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {iris2.StdTx} StdTx
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StdTx.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StdTx message.
         * @function verify
         * @memberof iris2.StdTx
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StdTx.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.msg != null && message.hasOwnProperty("msg")) {
                if (!Array.isArray(message.msg))
                    return "msg: array expected";
                for (var i = 0; i < message.msg.length; ++i)
                    if (!(message.msg[i] && typeof message.msg[i].length === "number" || $util.isString(message.msg[i])))
                        return "msg: buffer[] expected";
            }
            {
                var error = $root.iris2.StdFee.verify(message.fee);
                if (error)
                    return "fee." + error;
            }
            if (message.signatures != null && message.hasOwnProperty("signatures")) {
                if (!Array.isArray(message.signatures))
                    return "signatures: array expected";
                for (var i = 0; i < message.signatures.length; ++i) {
                    var error = $root.iris2.StdSignature.verify(message.signatures[i]);
                    if (error)
                        return "signatures." + error;
                }
            }
            if (message.memo != null && message.hasOwnProperty("memo"))
                if (!$util.isString(message.memo))
                    return "memo: string expected";
            return null;
        };

        /**
         * Creates a StdTx message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof iris2.StdTx
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {iris2.StdTx} StdTx
         */
        StdTx.fromObject = function fromObject(object) {
            if (object instanceof $root.iris2.StdTx)
                return object;
            var message = new $root.iris2.StdTx();
            if (object.msg) {
                if (!Array.isArray(object.msg))
                    throw TypeError(".iris2.StdTx.msg: array expected");
                message.msg = [];
                for (var i = 0; i < object.msg.length; ++i)
                    if (typeof object.msg[i] === "string")
                        $util.base64.decode(object.msg[i], message.msg[i] = $util.newBuffer($util.base64.length(object.msg[i])), 0);
                    else if (object.msg[i].length)
                        message.msg[i] = object.msg[i];
            }
            if (object.fee != null) {
                if (typeof object.fee !== "object")
                    throw TypeError(".iris2.StdTx.fee: object expected");
                message.fee = $root.iris2.StdFee.fromObject(object.fee);
            }
            if (object.signatures) {
                if (!Array.isArray(object.signatures))
                    throw TypeError(".iris2.StdTx.signatures: array expected");
                message.signatures = [];
                for (var i = 0; i < object.signatures.length; ++i) {
                    if (typeof object.signatures[i] !== "object")
                        throw TypeError(".iris2.StdTx.signatures: object expected");
                    message.signatures[i] = $root.iris2.StdSignature.fromObject(object.signatures[i]);
                }
            }
            if (object.memo != null)
                message.memo = String(object.memo);
            return message;
        };

        /**
         * Creates a plain object from a StdTx message. Also converts values to other types if specified.
         * @function toObject
         * @memberof iris2.StdTx
         * @static
         * @param {iris2.StdTx} message StdTx
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StdTx.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.msg = [];
                object.signatures = [];
            }
            if (options.defaults) {
                object.fee = null;
                object.memo = "";
            }
            if (message.msg && message.msg.length) {
                object.msg = [];
                for (var j = 0; j < message.msg.length; ++j)
                    object.msg[j] = options.bytes === String ? $util.base64.encode(message.msg[j], 0, message.msg[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.msg[j]) : message.msg[j];
            }
            if (message.fee != null && message.hasOwnProperty("fee"))
                object.fee = $root.iris2.StdFee.toObject(message.fee, options);
            if (message.signatures && message.signatures.length) {
                object.signatures = [];
                for (var j = 0; j < message.signatures.length; ++j)
                    object.signatures[j] = $root.iris2.StdSignature.toObject(message.signatures[j], options);
            }
            if (message.memo != null && message.hasOwnProperty("memo"))
                object.memo = message.memo;
            return object;
        };

        /**
         * Converts this StdTx to JSON.
         * @function toJSON
         * @memberof iris2.StdTx
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StdTx.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return StdTx;
    })();

    return iris2;
})();

module.exports = $root;
