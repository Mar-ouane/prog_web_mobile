package com.example.businesscard


import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.Image
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Email
import androidx.compose.material.icons.filled.Phone
import androidx.compose.material.icons.filled.Share
import com.example.businesscard.ui.theme.BusinessCardTheme
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.draw.clip







class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            BusinessCardTheme {
                Surface(color = MaterialTheme.colorScheme.background) {
                    BusinessCard()
                }
            }
        }
    }
}

@Composable
fun BusinessCard() {
    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(24.dp),
        verticalArrangement = Arrangement.SpaceBetween,
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        // Middle-ish section: Logo, Name, Title (takes more vertical space)
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .weight(1f), // Give this section more vertical space
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.Center
        ) {
            Surface(
                modifier = Modifier
                    .size(140.dp), // Larger logo
                shape = CircleShape,
                color = Color(0xFFE0F7FA)
            ) {
                // if  keep it empty (no logo) and a bleu circle will stay as place holder
                Image(
                    painter = painterResource(id = R.drawable.profile), // your image file name
                    contentDescription = "Profile picture",
                    modifier = Modifier
                        .size(140.dp)
                        .clip(CircleShape),
                    contentScale = ContentScale.Crop
                )
            }

            Spacer(modifier = Modifier.height(20.dp))

            Text(
                "MOURAD Marouane",
                fontSize = 32.sp, // Bigger name
                fontWeight = FontWeight.Bold
            )
            Text(
                "Data Science Student",
                fontSize = 20.sp, // Bigger title
                color = Color.Gray
            )
        }

        // Bottom section: Contact Info
        Column(
            modifier = Modifier
                .padding(bottom = 16.dp),
            horizontalAlignment = Alignment.Start
        ) {
            ContactRow(icon = Icons.Default.Phone, text = "+212 123401234")
            ContactRow(icon = Icons.Default.Share, text = "@Mysocialmedia")
            ContactRow(icon = Icons.Default.Email, text = "MyEmail@gmail.com")
        }
    }
}

@Composable
fun ContactRow(icon: androidx.compose.ui.graphics.vector.ImageVector, text: String) {
    Row(
        verticalAlignment = Alignment.CenterVertically,
        modifier = Modifier.padding(vertical = 4.dp)
    ) {
        Icon(
            imageVector = icon,
            contentDescription = null,
            tint = Color(0xFF3ddc84), // Green accent
            modifier = Modifier.size(24.dp)
        )
        Spacer(modifier = Modifier.width(8.dp))
        Text(text)
    }
}

@Preview(showBackground = true, showSystemUi = true)
@Composable
fun BusinessCardPreview() {
    BusinessCardTheme {
        BusinessCard()
    }
}
