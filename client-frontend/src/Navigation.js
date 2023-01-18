import React from "react";
import { NavLink } from "react-router-dom";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

function Navigation() {
  return (
    <div>

      <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              '& > *': {
                m: 1,
              },
            }}
          >

          <ButtonGroup size="large" variant="contained" aria-label="contained button group">

              <Button>
                <NavLink
                  to="/"
                  end
                >
                  Home
                </NavLink>
              </Button>

              <Button>
                <NavLink
                  to="/workspaces"
                  end
                >
                  Workspaces
                </NavLink>
              </Button>

              {/* <Button>
                <NavLink
                  to="/workspaces/add"
                  end
                >
                  Add
                </NavLink>
              </Button> */}

          </ButtonGroup>  

        </Box>

    </div>
  );
}

export default Navigation