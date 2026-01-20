<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'bb_db' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'd3,t> U|BL26KJ*pF4EAJ<.>2W6S2CBRx:)*K@)^#rJKDHP*cked[3om4u@2c^@]' );
define( 'SECURE_AUTH_KEY',  'NDeI|8S[g41lV>$g#T},Y- }RJ{XUNJO?=w69:tmZA1G|Dk{{FnS4W>VX>JRn+P9' );
define( 'LOGGED_IN_KEY',    '_j9Gkx ]&e3d3GM:f|OaX+(JGMW?K@(2v=7jFF=h|w]K@BSP4l6Ob{}F TLl+OD)' );
define( 'NONCE_KEY',        '}q_.wWBg$)ckr{OB!`r;G~Kn9(PWpJ+(1i|$EgBE6dboFLS6,@gK)UI abg$se94' );
define( 'AUTH_SALT',        'E}eZUEAt*lEH!>*r4B_;fnRNd7GA9YAHlyb{U/ZPIlj;_W-kVR!czC}H)o:NVsN ' );
define( 'SECURE_AUTH_SALT', 'Z=krlmtenBEH! ZO?79H3Cn=!x1LWu[Rp*_)u~JX!@NbOx=_4UVB=m3o*HfniAEs' );
define( 'LOGGED_IN_SALT',   ':vgWyej?7J<Taxxio;bKMwIze8HMD,k9Ya~Z:[GVdBV0O]>::ic+jM?6xJ:]H]po' );
define( 'NONCE_SALT',       'Aoo@V]FeDQ1#%Y-QX4w3de#?QGVVor8YtO)ntk.Z6oVbpzK!<s}c /(?G{0lvlkL' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
