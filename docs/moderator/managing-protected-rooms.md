---
sidebar_position: 1
sidebar_label: Managing protected rooms
---

<!--
SPDX-FileCopyrightText: 2024 Gnuxie <Gnuxie@protonmail.com>

SPDX-License-Identifier: CC-BY-SA-4.0
-->

# Protecting rooms

Draupnir functions by protecting a set of rooms, called the protected
rooms set. Draupnir works by applying protections across the set of
protected rooms, and some of these protections in turn work to enforce
policies across the same set of protected rooms.

When you first use Draupnir, Draupnir will not know which
rooms to protect yet, and so you will need to configure which rooms
that you want Draupnir to protect.

## Confirming the protection status of a room

If you are unsure whether Draupnir is protecting a room, you can issue
the `!draupnir rooms list` command to view a list of rooms that
Draupnir is currently protecting. You may wish to do this after
attempting to protect rooms with the following methods, so that you
can confirm that all is ok.

## Inviting Draupnir to rooms

Just by inviting your Draupnir bot to rooms, Draupnir will ask you
within the management room whether you wish to protect the room.

The answer to the question can be given by clicking on the reactions
in your Matrix client. By selecting 'Ok', Draupnir will protect the
room, and if all goes well Draupnir will leave behind a green tick
once this is complete.

## Using the Draupnir `rooms` command

You can also manage which rooms Draupnir is protecting by using the
`!draupnir rooms add` and the `!draupnir rooms remove` commands.

If the room you are protecting is private, you will first need to
invite your Draupnir bot user to the room that you are trying to
protect.

If you believe Draupnir is able to freely join the room you are trying
to protect, you can now use the `!draupnir rooms add` command.

### Obtaining a room reference

In order to refer to the room that you are trying to manage, you will
need to obtain a reference to the room. The easiest way to do this is
to go to the room that you are trying to manage in your client. Then
once you can see the room timeline, go to the "room info" section or
"room settings". From there you should be able to "copy link" or
"share" the room. You want to then copy this link and provide it to
Draupnir like so: `!draupnir rooms add <your link>` which will look
like this: `!draupnir rooms add
https://matrix.to/#/#my-room:example.com`.

The same can be done if you are trying to remove a room
`!draupnir rooms remove <your link>` which will look like this
`!draupnir rooms remove https://matrix.to#/#my-room:example.com`.

## Giving Draupnir permissions

Once Draupnir is protecting a room, Draupnir may start to complain
about missing permissions. You will want to first take note of which
permissions Draupnir has described as missing. Then you will go to the
protected room's settings in your client and give Draupnir the
"Admin" power level.

To understand how permissions work in Matrix, you can review our
power levels document [here](../concepts/power-levels).

## Using Rory&'s Matrix Utils

A third party tool can be used to quickly add entire groups of rooms to
be protected Draupnir. You will have to sign in using the same account
as Draupnir, so this is only supported by users of "bot mode" for now.
You can find the tool [here](https://mru.rory.gay/Moderation/DraupnirProtectedRoomsEditor).

## Protecting encrypted rooms

:::warning

When public Matrix rooms are encrypted, untrusted parties can deny
Draupnir, yourself, and your moderators access to the decryption keys
of malicious messages. Meaning that you will be unable to read them,
while the rest of your community can.

:::

:::info

Draupnir can still protect encrypted rooms without an E2EE capable
device.

:::

Draupnir can still protect encrypted rooms even without enabling any
E2EE device for Draupnir to use. Most functionality will
work without any problem, however some protections will be unable to
reliably function. Specifically any protection that needs to access
the content of an event can encounter problems. This includes
protetions such as `WordList` and `FirstMessageIsImage`.

If your Draupnir deployment supports encryption, protections that
require access to event content can be bypassed by malicious
users. The Matrix specification currently does not provide mechanisms
that allow a device to get message keys from third parties, so unless
Draupnir is provided keys directly from the event sender, then
Draupnir will be unable to decrypt a given message. While considering
the frequency of E2EE issues, Draupnir can not make a choice to
sanction users for not providing keys automatically, which could
otherwise be used as a workaround.

The E2EE functionality is not part of the Dogfooding program that
Draupnir has in place as an extra layer of quality assurance above
that offered by our CI testing. You can read more about this program
in [The Dogfood Guide](/shared/dogfood.md).
